const MeetingHistory = require('../../model/schema/meeting')
const mongoose = require('mongoose');


exports.addMeeting = async (req, res) => {
    try {
            const {
                agenda,
                attendes,
                attendesLead,
                location,
                related,
                dateTime,
                notes,
                createBy
            } = req.body;

            const meeting = new MeetingHistory({
                agenda,
                attendes,
                attendesLead,
                location,
                related,
                dateTime,
                notes,
                createBy
            });

            await meeting.save();

            res.status(201).json({
                success: true,
                message: 'Meeting created successfully',
                data: meeting
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                success: false,
                message: 'Internal Server Error',
                error: error.message
            });
        }
}

const index = async (req, res) => {
    
}

const view = async (req, res) => {
    try {
        const meetings = await MeetingHistory.find().sort({ dateTime: -1 });
        res.status(200).json({
            success: true,
            message: 'All meetings fetched successfully',
            data: meetings
        });
    } catch (error) {
        console.error('Error fetching meeting history:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};


const deleteData = async (req, res) => {
  
}

const deleteMany = async (req, res) => {
    
}

// module.exports = { addMeeting, index, view, deleteData, deleteMany }