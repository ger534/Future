import React, { useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

/* third party packages */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* intellectual property */
import Home from '../components/home/Home'
import Chapter from '../components/chapter/chapter'
import Tale from '../components/tale/tale'
import Cards from '../components/cards/cards'
import Plots from '../components/plots/plots'
import Characters from '../components/characters/characters'
import { ThemeContext, themes } from '../helpers/themeContext/themeContext';
import Footer from '../components/footer/footer';
import Game from "../components/game/game";
import Login from "../components/login/login";
import SignUp from "../components/signUp/signUp";
import { UserContext } from "../helpers/userContext/userContext";
import ProjectPresentation from "../components/projectPresentation/projectPresentation";
import About from "../components/about/About";
import Info from "../components/info/Info";
import NotReady from "../components/notReady/notReady";


import GameCover from "../components/gameCover/gameCover";

//data
import { gameCovers, mainCards, mainPlays, chapters, tales, games } from './data'
import useStyles from './style';

import TecnotopiaAppBar from '../libs/appbar/appbar';
import Plays from "../components/plays/plays";
import useWindowDimensions from "../helpers/useWindowDimensions/useWindowDimensions";
import { Tab } from "@material-ui/core";

function App() {
  
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  
  const [contextTheme, themeToggler] = useState(JSON.parse(localStorage.getItem('contextTheme')) ? JSON.parse(localStorage.getItem('contextTheme')) : themes.dark);
  const toggleTheme = () => {
    localStorage.setItem('contextTheme', JSON.stringify(themes.dark) === localStorage.getItem('contextTheme') ? JSON.stringify(themes.light) : JSON.stringify(themes.dark))
    themeToggler(JSON.parse(localStorage.getItem('contextTheme')))
  };
  const classes = useStyles(contextTheme);

  const { height } = useWindowDimensions();

  const [contextUser, setContextUser] = useState(JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')) : {});
  const setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    setContextUser(JSON.parse(localStorage.getItem('user')))
  };

  return (
    <>
      <br></br>
      <UserContext.Provider value={[contextUser, setContextUser]}>
        <ThemeContext.Provider value={[contextTheme, themeToggler]}>
          <div className={classes.root} style={{ minHeight: `${height - 41}px` }}>
            <CssBaseline />
            <Router>

              <TecnotopiaAppBar
                toggleTheme={toggleTheme}
                classes={classes}
                openDrawer={openDrawer}
                handleDrawerOpen={handleDrawerOpen} />

              <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                
                  <Switch onClick={handleDrawerClose}>

                    <Route path="/plays" component={() => <Plays mainPlays={mainPlays} />} />
                    <Route path="/characters" component={() => <Cards mainCards={mainCards} />} />
                    <Route path="/plots" component={Plots} />
                    <Route path="/project_presentation" component={ProjectPresentation} />
                    <Route path="/authors" component={About} />
                    <Route path="/info" component={Info} />
                    <Route path="/X035" component={NotReady} />

                    {/* auth paths */}
                    <Route path="/login" component={Login} setUser={setUser} />
                    <Route path="/signup" component={SignUp} setUser={setUser} />

                    {/* cover paths */}
                    {gameCovers.map((gameCover, i) =>
                      <Route key={i} path={gameCover.route} render={() => <GameCover title={gameCover.title} image={gameCover.image} acts={gameCover.acts} extraContent={gameCover.extraContent} />} onClose={handleDrawerClose} onClick={handleDrawerClose} />
                    )}

                    {/* interactive game paths */}
                    {games.map((game) =>
                      <Route key={game.gameId} path={game.route} render={() => <Game gameId={game.gameId} image={game.image} route={game.route} next={game.next} />} onClose={handleDrawerClose} onClick={handleDrawerClose} />
                    )}

                    {/* characters paths */}
                    {mainCards.map((character) =>
                      <Route path={`/${character.title}`} key={character.title} render={() => <Characters char={character.title} image={character.image} />} onClose={handleDrawerClose} onClick={handleDrawerClose} />
                    )}

                    {/* solo tales */}
                    {tales.map((tale) =>
                      <Route key={tale.title} path={tale.route} render={() => <Tale title={tale.title} file_name={tale.file_name} route={tale.route} cover={tale.cover} />} />
                    )}

                    {/* static stories paths */}
                    {/* drafts */}
                    {chapters.map((chapter) =>
                      <Route key={chapter.title} path={chapter.route} render={() => <Chapter title={chapter.title} file_name={chapter.file_name} route={chapter.route} next={chapter.next} />} onClose={handleDrawerClose} onClick={handleDrawerClose} />
                    )}

                    <Route render={() => <Home />} />
                  </Switch>

              </main>

            </Router>
          </div>
          <Footer theme={contextTheme} />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
