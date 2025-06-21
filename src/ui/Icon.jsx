import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faNpm, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCircleUp, faSun } from '@fortawesome/free-regular-svg-icons';
import {
  faCube,
  faFlagCheckered,
  faMoon,
  faPalette,
  fas,
  faScrewdriverWrench,
  faBoxesPacking,
  faBorderAll,
  faLaptopCode,
  faSliders,
  faSquareCheck,
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
  faReact,
  faBoxesPacking,
  faBorderAll,
  faLaptopCode,
  faSliders,
  faSquareCheck,
);

const Icon = ({ ...props }) => <FontAwesomeIcon {...props} />;

export default Icon;
