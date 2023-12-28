import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '@mdi/react';
import { mdiCubeOutline } from '@mdi/js';
import { Link } from 'react-router-dom';

const Home = () => 
    (
    <Fragment>
        <Helmet>
            <title>
                Quiz App - Home
            </title>
        </Helmet>

        <div id="home">
            <section>
                <div>
                    <Icon path={mdiCubeOutline} size={1} />
                </div>

                <h1>Quiz App</h1>
                <div className="play-button-container">
                    <ul>
                        <li>
                            <link to="/play/instructions">Play</link>
                        </li>
                        {/* CHECK the dev tools, there is an issue with that link */}
                    </ul>
                </div>
            </section>
        </div>
    </Fragment>
      
    );

export default Home;