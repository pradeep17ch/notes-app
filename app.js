console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Pradeep'));
// var filteredArray = _.uniq(['Pradeep', 1, 'Pradeep', 1, 2, 3, 4]);
// console.log(filteredArray);
//
// //var user = os.userInfo();
// //console.log(user);
//
// var sum = notes.addNumbers(2, 3);
// console.log(sum);

//fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);

const titleOptions = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
};

const bodyOptions = {
	describe: 'Body of note',
	demand: true,
	alias: 'b'
};

const argv = yargs
	.command('add', 'Add a new note', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('list', 'List all notes')
	.command('read', 'Read a note', {
		title: titleOptions
	})
	.command('remove', 'Remove a note', {
		title: titleOptions
	})
	.help()
	.argv;
var command = argv._[0];


if(command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if(note) {
    console.log('Note added successfully.');
    notes.logNote(note);
  } else {
    console.log('Duplicate note exists.');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note read.');
    notes.logNote(note);
  } else {
    console.log('Note not found.');
  }
} else if (command  === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}
