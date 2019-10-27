// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as  fs from 'fs';
import * as  path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "simple-html-template" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.simple-html-template', () => {
		// // The code you place here will be executed every time your command is executed

		// // Display a message box to the user
		// vscode.window.showInformationMessage('simple-html-template!');

		// the code executes here
		const html = `
			<html>
				<head>
				</head>
				<body>
					{/* insert body here */}
				</body>
			</html>
		`;

		const folderPath: any = vscode.workspace.rootPath;
		//

		fs.writeFile(path.join(folderPath, 'index.html'), html, err => {
			console.error(err);
			return err ? vscode.window.showErrorMessage("simple html template error") : vscode.window.showInformationMessage('It worked');
		});
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
