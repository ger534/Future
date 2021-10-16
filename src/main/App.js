import React, { useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

/* third party packages */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/* intellectual property */
import Home from '../components/home/Home'
import Chapter from '../components/chapter/chapter'
import Cards from '../components/cards/cards'
import Plots from '../components/plots/plots'
import Characters from '../components/characters/characters'
import { ThemeContext, themes } from '../helpers/themeContext/themeContext';
import Footer from '../components/footer/footer';
import Game from "../components/game/game";

//character cards array
import { mainCards, chapters, games } from './data'
import useStyles from './style';

import TecnotopiaAppBar from '../libs/appbar/appbar';
import TecnotopiaDrawer from '../libs/drawer/drawer';

function App() {
  //language
  const { i18n } = useTranslation('common');
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const handleLanguageOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLanguageClose = (lan, event) => {
    if (typeof lan === 'string') {
      i18n.changeLanguage(lan.toString())
    }
    setAnchorEl(null);
  };
  const [contextTheme, themeToggler] = useState(JSON.parse(localStorage.getItem('contextTheme')) ? JSON.parse(localStorage.getItem('contextTheme')) : themes.light);
  const classes = useStyles(contextTheme);
  const toggleTheme = () => {
    localStorage.setItem('contextTheme', JSON.stringify(themes.dark) === localStorage.getItem('contextTheme') ? JSON.stringify(themes.light) : JSON.stringify(themes.dark))
    themeToggler(JSON.parse(localStorage.getItem('contextTheme')))
  };

  return (
    <>
      <ThemeContext.Provider value={[contextTheme, themeToggler]}>
        <div className={classes.root}>
          <CssBaseline />
          <Router>

            <TecnotopiaAppBar
              toggleTheme={toggleTheme}
              classes={classes}
              anchorEl={anchorEl}
              openDrawer={openDrawer}
              handleDrawerOpen={handleDrawerOpen}
              handleLanguageOpen={handleLanguageOpen}
              handleLanguageClose={handleLanguageClose} />

            <TecnotopiaDrawer
              chapters={chapters}
              games={games}
              toggleTheme={toggleTheme}
              classes={classes}
              openDrawer={openDrawer}
              handleDrawerClose={handleDrawerClose} />

            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Container /*maxWidth="lg"*/ maxWidth={false} className={classes.container}>

                <Switch onClick={handleDrawerClose}>
                  {/*<Route path="/dashboard" component={Dashbord} />*/}
                  {/*<Route path="/about" component={About} />*/}
                  {/*<Route path="/termsandconditions" component={TermsAndConditions} />*/}

                  <Route path="/cards" component={() => <Cards mainCards={mainCards} />} onClose={handleDrawerClose} onClick={handleDrawerClose} />
                  <Route path="/plots" component={Plots} onClose={handleDrawerClose} onClick={handleDrawerClose} />

                  {/*interactive game paths*/}
                  {games.map((game) =>
                    <Route key={game.gameId} path={game.route} render={() => <Game gameId={game.gameId} route={game.route} next={game.next} />} onClose={handleDrawerClose} onClick={handleDrawerClose} />
                  )}

                  {/*characters paths*/}
                  {mainCards.map((character) =>
                    <Route path={`/${character.title}`} key={character.title} render={() => <Characters char={character.title} image={character.image} />} onClose={handleDrawerClose} onClick={handleDrawerClose} />
                  )}
                  
                  {/*static stories paths*/}
                  {chapters.map((chapter) =>
                    <Route key={chapter.title} path={chapter.route} render={() => <Chapter title={chapter.title} file_name={chapter.file_name} route={chapter.route} next={chapter.next} />} onClose={handleDrawerClose} onClick={handleDrawerClose} />
                  )}

                  <Route render={() => <Home />} />
                </Switch>

                <Footer style={{ /*minHeight: "100vh"*/ marginTop: "auto" }} />

              </Container>
            </main>

          </Router>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
