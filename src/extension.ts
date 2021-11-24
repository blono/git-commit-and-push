import * as nls from 'vscode-nls';

const localize = nls.config({ messageFormat: nls.MessageFormat.file })();

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('git-commit-and-push.commitAndPush', () => {
        return vscode.commands.executeCommand("git.commitStaged").then(() => {
            return vscode.commands.executeCommand("git.sync").then(() => {
				const message = localize('commitAndPush.text', 'Committed and pushed successfully');
                vscode.window.showInformationMessage(message);
            });
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
