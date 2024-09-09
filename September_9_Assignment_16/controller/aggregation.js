const Movie = require("../model/movieSchema");

async function match(req,res) {
    const data = await Movie.aggregate([{$match:{genres:"Short"}},{$limit:5}])
    res.json({
        message:"Fetch Success",
        Data:data
    })
    
}

async function group(req,res) {
    const data = await Movie.aggregate([{$match:{directors:"William K.L. Dickson"}},{$group:{_id:"William K.L. Dickson",totalAward:{$sum:"$awards.wins"}}}])

    res.json({
        message:"Fetch Success",
        Data:data
    })
    
}

async function project(req,res) {
    const data = await Movie.aggregate([{$match:{genres:"Short"}},{$project:{plot:1}}])
    res.json({
        message:"Fetch Success",
        Data:data
    })
    
}

async function sort(req,res) {
    const data = await Movie.aggregate([{$match:{directors:"William K.L. Dickson"}},{$sort:{ year:-1}},{$project:{plot:1,year:1}}])
    res.json({
        message:"Fetch Success",
        Data:data
    })
    
}

async function limit(req,res) {
    const data = await Movie.aggregate([{$match:{genres:"Short"}},{$limit:5},{$project:{plot:1}}])
    res.json({
        message:"Fetch Success",
        Data:data
    })
    
}

async function count(req,res) {
    const data = await Movie.aggregate({$count:"Total"})
    res.json({
        message:"Fetch Success",
        Data:data
    })
    
}

async function unwind(req,res) {
    const data = await Movie.aggregate([{$match:{directors:"William S. Hart"}},{$unwind:"$genres"},{$project:{genres:true,plot:1}},{$limit:2}])
    res.json({
        message:"Fetch Success",
        Data:data
    })
    
}

async function firstEntry(req,res) {
    const data = await Movie.aggregate([{$group:{_id:"plot",firstentry:{$first:"$plot"}}}])
    res.json({
        message:"Fetch Success",
        Data:data
    })
    
}

async function lastEntry(req,res) {
    const data = await Movie.aggregate([{$group:{_id:"plot",lastentry:{$last:"$plot"}}}])
    res.json({
        message:"Fetch Success",
        Data:data
    })
    
}

async function expression(req,res) {
    const data = await Movie.aggregate([{$match:{$expr:{$eq:["$cast","$directors"]}}},{$limit:5}])
    res.json({
        message:"Fetch Success",
        Data:data
    })
    
}

async function average(req,res) {
    const data = await Movie.aggregate([{$match:{directors:"Buster Keaton"}},{$group:{_id:"AverageRating",averageRating:{$avg:"$tomatoes.viewer.rating"}}}])
    res.json({
        message:"Fetch Success",
        Data:data
    })
    
}

async function maxRating(req,res) {
    const data = await Movie.aggregate([{$match:{directors:"Buster Keaton"}},{$group:{_id:"MaxRating",maximumRating:{$max:"$tomatoes.viewer.rating"}}}])
    res.json({
        message:"Fetch Success",
        Data:data
    })
    
}

async function minRating(req,res) {
    const data = await Movie.aggregate([{$match:{directors:"Buster Keaton"}},{$group:{_id:"MinRating",minimumRating:{$min:"$tomatoes.viewer.rating"}}}])
    res.json({
        message:"Fetch Success",
        Data:data
    })
    
}

async function sample(req,res) {
    const data = await Movie.aggregate([{$sample: {size:5}},{$project:{plot:1}}])
    res.json({
        message:"Fetch Success",
        Data:data
    })
    
}

async function bucket(req,res) {
    const data = await Movie.aggregate([{$bucket:{groupBy: "$tomatoes.viewer.rating",boundaries:[1,2,3,4,5],default:"Others",output:{"Count":{$sum:1},"averageRating":{$avg:"$tomatoes.viewer.rating"}}}}])
    res.json({
        message:"Fetch Success",
        Data:data
    })
    
}


module.exports = {match,group,project,sort,limit,count,unwind,firstEntry,lastEntry,expression,average,maxRating,minRating,sample,bucket}