#!/usr/bin/env node

import { Command } from 'commander';
import { buildApi } from './build_api';
import packageJSON from '../package.json';

const program = new Command();

program.version(packageJSON.version);

program.command('build_api').description('swagger 文档生成 API 方法').action(buildApi);

program.parse(process.argv);
