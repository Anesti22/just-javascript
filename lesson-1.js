// Mental Models

let a = 10;
let b = a;
a = 0;

// Coding, Fast and Slow
// How you read the code

function duplicateSpreadsheet(original) {
    if (original.hasPendingChanges) {
        throw new Error('You need to save the file before you can duplicate it.');
    }
    let copy = {
        created: Date.now(),
        author: original.author,
        cells: original.cells,
        metadata: original.metadata,
    };
    copy.metadata.title = 'Copy of ' + original.metadata.title;
    return copy;
}

// - This function duplicates a spreadsheet.
// - It throws an error if the original spreadsheet isn’t saved.
// - It prepends “Copy of” to the new spreadsheet’s title.