const questions = require('../models.mocked/questions.mocked');
const serviceMocked = {};

serviceMocked.get = (req, res) => {
    console.log('query', req.query);
    const limit = +req.query.limit;
    console.log('limit', limit);
    console.log(!NaN, limit === NaN, !limit)
    if(!limit)
        return res.status(200).json(questions);
    // validar valores team
    if(!!limit){ // limit !== null || limit === undefined || limit !== 0 || limit !== ''
        if(questions.length < limit)
            return res.status(400).json({message: 'Invalid limit.'});
        console.log('questions', questions.length);
        const questionsFiltered = [].concat(questions).splice(0, limit);
        if (!!questionsFiltered) // explicar == null == undefined        
        console.log('questionsFiltered', questionsFiltered.length);
        console.log('questions', questions.length);
        return res.status(200).json(questionsFiltered);
    }
    return res.status(400).json({message: ''});
};


serviceMocked.getById = (req, res) => {
    console.log('params', req.params);
    const id = +req.params.id;
    console.log('id', id);
    if(!id)
        return res.status(400).json();
    console.log('questions', questions.length);
    const questionFiltered = questions.find(q=>q.id === id);
    console.log('questionFiltered', questionFiltered);
    if (!questionFiltered)   
        return res.status(400).json({message: 'Invalid question.'});    
    return res.status(200).json(questionFiltered);
    
};

module.exports = serviceMocked;