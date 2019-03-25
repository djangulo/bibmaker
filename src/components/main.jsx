/** @jsx jsx */
//eslint-disable-next-line
import React from 'react';
import loadable from '@loadable/component';
import { jsx } from '@emotion/core';
import { Segment, Grid } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';

import LoaderWithText from './common/loaderWithText';
import References from './references';
import SiteHeader from './siteHeader';
import NavLinks from './navLinks';

const APAForm = loadable(() => import('./apaForm'), {
  fallback: <LoaderWithText inverted={true} />
});

const styles = {
  root: {
    height: '100vh',
    transition: 'width 2s ease-in'
  },
  menuButton: {
    position: 'fixed',
    left: 25,
    top: 25
  },
  hide: { display: 'hidden' },
  mainOpen: {
    marginLeft: '10em'
  },
  segment: {
    minHeight: '40vh'
  }
};

export default function NavigationSidebar() {
  return (
    <div>
      <SiteHeader />
      <NavLinks />
      <Grid columns={2} divided stackable>
        <Grid.Column>
          <Segment css={styles.segment}>
            <Switch>
              <Route path="/apa" exact component={APAForm} />
              {/* <Redirect to={t('router:not_found.path')} /> */}
            </Switch>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment css={styles.segment}>
            <References />
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}
