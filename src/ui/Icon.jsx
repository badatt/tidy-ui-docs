import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';
import { faCircleUp, faSun } from '@fortawesome/free-regular-svg-icons';
import {
  faCube,
  faFlagCheckered,
  faMoon,
  faPalette,
  fas,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(
  fab,
  fas,
  faFlagCheckered,
  faGithub,
  faCube,
  faScrewdriverWrench,
  faPalette,
  faNpm,
  faMoon,
  faSun,
  faCircleUp,
);

const Icon = ({ ...props }) => <FontAwesomeIcon {...props} />;

export default Icon;
