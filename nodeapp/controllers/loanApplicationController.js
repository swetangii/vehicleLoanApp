const { formatMongooseError } = require('../authUtils');
const LoanApplication = require('../models/loanApplicationModel');

const getAllLoanApplications = async (req, res) => {
    try {
        const loanApplications = await LoanApplication.find({})            
        res.status(200).json(loanApplications);
    } catch (error) {   
        if (error.name === 'CastError' || error.name === 'ValidationError') {
            const formattedMessage = formatMongooseError(error);
            res.status(400).json({ message: formattedMessage });
        } else {
            res.status(500).json({ message: error.message});
        }
    }
};

const getLoanApplicationsByUserId = async (req, res) => {
    try {
        const {userId} = req.user || req.params
        const loanApplications = await LoanApplication.find({ userId });
        res.status(200).json(loanApplications);
    } catch (error) {
        if (error.name === 'CastError' || error.name === 'ValidationError') {
            const formattedMessage = formatMongooseError(error);
            res.status(400).json({ message: formattedMessage });
        } else {
            res.status(500).json({ message: error.message});
        }
    }
};

const getLoanApplicationById = async (req, res) => {
    try {
        const { id } = req.params;
        const loanApplication = await LoanApplication.findById(id);
        
        if (loanApplication) {
            res.status(200).json(loanApplication);
        } else {
            res.status(404).json({ message: "Cannot find any loan" });
        }
    } catch (error) {
        if (error.name === 'CastError' || error.name === 'ValidationError') {
            const formattedMessage = formatMongooseError(error);
            res.status(400).json({ message: formattedMessage });
        } else {
            res.status(500).json({ message: error.message});
        }
    }
};

const addLoanApplication = async (req, res) => {
    try {
        const applicationData = {
            ...req.body,
        };

        if (req.file && typeof req.file.filename === 'string') {
            applicationData.file = req.file.filename;
        } else if (typeof req.body.file === 'string') {
            applicationData.file = req.body.file;
        }

        console.log('Multer file:', req.file);
        
        await LoanApplication.create(applicationData);
        res.status(200).json({ message: "Added Successfully" });
    } catch (error) {
        if (error.name === 'CastError' || error.name === 'ValidationError') {
            const formattedMessage = formatMongooseError(error);
            console.log(error);
            res.status(400).json({ message: formattedMessage });
        } else {
            res.status(500).json({ message: error.message});
        }
    }
};

const updateLoanApplication = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = {
            ...req.body,
            ...(req.file && { file: req.file.filename })
        };
        const loanApplication = await LoanApplication.findByIdAndUpdate(id, updateData);
        
        if (loanApplication) {
            res.status(200).json({ message: "Loan application updated successfully" });
        } else {
            res.status(404).json({ message: "Loan application not found" });
        }
    } catch (error) {
        if (error.name === 'CastError' || error.name === 'ValidationError') {
            const formattedMessage = formatMongooseError(error);
            res.status(400).json({ message: formattedMessage });
        } else {
            res.status(500).json({ message: error.message});
        }
    }
};

const deleteLoanApplication = async (req, res) => {
    try {
        const { id } = req.params;
        const loanApplication = await LoanApplication.findByIdAndDelete(id);
        
        if (loanApplication) {
            res.status(200).json({ message: "Loan application deleted successfully" });
        } else {
            res.status(404).json({ message: "Loan application not found" });
        }
    } catch (error) {
        if (error.name === 'CastError' || error.name === 'ValidationError') {
            const formattedMessage = formatMongooseError(error);
            res.status(400).json({ message: formattedMessage });
        } else {
            res.status(500).json({ message: error.message});
        }
    }
};

module.exports = {
    getAllLoanApplications,
    getLoanApplicationsByUserId,
    getLoanApplicationById,
    addLoanApplication,
    updateLoanApplication,
    deleteLoanApplication
};
