import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const outputChannel = vscode.window.createOutputChannel("Hello World Output");

    let disposable1 = vscode.commands.registerCommand('nscicd.helloWorld1', () => {
        vscode.window.showInformationMessage('Hello World 1 from nscicd');
        showProjectRoot(outputChannel, 1);
    });

    let disposable2 = vscode.commands.registerCommand('nscicd.helloWorld2', () => {
        vscode.window.showInformationMessage('Hello World 2 from nscicd');
        showProjectRoot(outputChannel, 2);
    });

    let disposable3 = vscode.commands.registerCommand('nscicd.helloWorld3', () => {
        vscode.window.showInformationMessage('Hello World 3 from nscicd');
        showProjectRoot(outputChannel, 3);
    });

    let disposable4 = vscode.commands.registerCommand('nscicd.helloWorld4', () => {
        vscode.window.showInformationMessage('Hello World 4 from nscicd');
        showProjectRoot(outputChannel, 4);
    });

    let disposable5 = vscode.commands.registerCommand('nscicd.helloWorld5', () => {
        vscode.window.showInformationMessage('Hello World 5 from nscicd');
        showProjectRoot(outputChannel, 5);
    });

    context.subscriptions.push(disposable1, disposable2, disposable3, disposable4, disposable5);
}

function showProjectRoot(outputChannel: vscode.OutputChannel, commandNumber: number) {
    const folderPath = vscode.workspace.rootPath;
    outputChannel.appendLine(`Hello World ${commandNumber}`);
    outputChannel.appendLine(`Project root path: ${folderPath}`);
    outputChannel.show(true);
}

export function deactivate() {}
