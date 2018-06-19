#!/usr/bin/env node
import {runArgsInProcess} from "@comunica/runner-cli";
import {existsSync} from "fs";
const inDev: boolean = existsSync(__dirname + '/run.ts');
runArgsInProcess(__dirname + '/../', __dirname + '/../config/config-default.json', inDev);
