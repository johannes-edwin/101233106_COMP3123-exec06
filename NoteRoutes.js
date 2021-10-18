const noteModel = require('../models/Notes.js');

const express = require('express');
const noteModel = require('../models/Note');
const app = express();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note
    const note = new noteModel(req.body);
    try {
        note.save();
        res.send(note);
    } catch (err) {
        res.status(500).send(err);
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to returns all note
    const notes = await noteModel.find({});

    try {
        res.send(notes);
    } catch (err) {
        res.status(500).send(err);
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    const note = await noteModel.findById(req.params.noteId);

    try {
        res.send(note)
    } catch (err) {
        res.status(500).send(err)
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
    try {
        await noteModel.findByIdAndUpdate(req.params.noteId, req.body)
        await noteModel.save()
    } catch (err) {
        res.status(500).send(err)
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
    try {
        const note = await noteModel.findByIdAndDelete(req.params.noteId)

        if (!note) res.status(404).send("No item found")
        res.status(200).send("Deleted successfully")
    } catch (err) {
        res.status(500).send(err)
    }
});
