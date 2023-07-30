import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCube, faFlagCheckered, faPalette, fas, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, fas, faFlagCheckered, faGithub, faCube, faScrewdriverWrench, faPalette);

const Icon = ({ ...props }) => <FontAwesomeIcon {...props} />;

export default Icon;
