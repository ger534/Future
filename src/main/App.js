import React from "react";
import { useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

/* third party packages */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/* intellectual property */
import Home from '../components/home/Home'
import Chapter from '../components/Chapter/Chapter'
import Cards from '../components/cards/cards'
import Plots from '../components/plots/plots'
import Characters from '../components/characters/characters'
import { ThemeContext, themes } from '../contexts/theme-context';
import Footer from '../components/footer/footer';

//character cards array
import { mainCards, chapters } from './characters_n_chapters'
import useStyles from './style';

import TecnotopiaAppBar from './appbar';
import TecnotopiaDrawer from './drawer';

function App() {
  //language
  const { i18n } = useTranslation('common');
  const [openDrawer, setopenDrawer] = React.useState(false);
  const handleDrawerOpen = () => {
    setopenDrawer(true);
  };
  const handleDrawerClose = () => {
    setopenDrawer(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleLanguageOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLanguageClose = (lan, event) => {
    if (typeof lan === 'string') {
      i18n.changeLanguage(lan.toString())
    }
    setAnchorEl(null);
  };
  const [contextTheme, themeToggler] = React.useState(themes.light);
  const classes = useStyles(contextTheme);
  const toggleTheme = () => {
    themeToggler(contextTheme === themes.dark ? themes.light : themes.dark)
  };
  useTheme(contextTheme === themes.dark ? themes.light : themes.dark)

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

                  {/*characters paths*/}
                  {mainCards.map((character) =>
                    <Route path={`/${character.title}`} key={character.title} render={() => <Characters char={character.title} image={character.image} />} onClose={handleDrawerClose} onClick={handleDrawerClose} />
                  )}
                  {/*chapters paths*/}
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
