import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('git-commit-and-push.commitAndPush', () => {
		return vscode.commands.executeCommand("git.commitStaged").then(() => {
			return vscode.commands.executeCommand("git.sync").then(() => {
				vscode.window.showInformationMessage('Committed and pushed successfully');
			});
		});
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
