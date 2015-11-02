import './module-init';
import {config} from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

angular.module('igola')
  .config(config)
  .config(routerConfig)
  .run(runBlock);
