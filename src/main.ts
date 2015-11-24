'use strict';

import { commands, ExtensionContext } from 'vscode';
import { formatXml, linearizeXml } from './features/xmlFormatting';
import { evaluateXPath } from './features/xmlXPathEngine';
import { checkForUpdates } from './utils/UpdateNotifier';

export function activate(ctx: ExtensionContext) {
	// check for update
	checkForUpdates();
	
	// register palette commands
	ctx.subscriptions.push(commands.registerTextEditorCommand('xmltools.formatXml', formatXml));
	ctx.subscriptions.push(commands.registerTextEditorCommand('xmltools.linearizeXml', linearizeXml));
	ctx.subscriptions.push(commands.registerTextEditorCommand('xmltools.evaluateXPath', evaluateXPath));
}