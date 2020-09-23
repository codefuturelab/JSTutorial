console.clear();

let hi = () => {
    console.log("it is a callback");

}
setTimeout(hi,3000);
console.log("naber"); // hi çalışmasını beklemiyor 
setTimeout(()=>{
    console.log("another callback");
},50);

let posts = [
    {
        "title": "title 1",
        "body" : "body1"
    },
    {
        "title": "title 2",
        "body" : "body2"
    }
];

let addPost = (post,callback) => {
    setTimeout(() => {posts.push(post);
    callback();
},300);
}
let getAllPost = () => {
    setTimeout(() =>{
        posts.forEach((post) => console.log(post.title + " " + post.body));
       // console.clear();
    },200)
}
//addPost(); //async
//getAllPost(); //async 
// how can we run the sync i want to execute the getAllpost() after push new post so :
let newPost = {
    "title": "title 3",
    "body" : "body3"
};
//addPost(newPost, getAllPost);
console.log("41");
console.clear();

const fruitBasket = {
    apple: 27,
    grape: 0,
    pear: 14
  };
  const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  
  const getNumFruit = fruit => {
    return sleep(3000).then(v => fruitBasket[fruit])
  }
  
  //getNumFruit('apple')
   // .then(num => console.log(num))
   const control = async _ => {
    console.log('Start')
  
    const numApples = await getNumFruit('apple')
    console.log(numApples)
  
    const numGrapes = await getNumFruit('grape')
    console.log(numGrapes)
  
    const numPears = await getNumFruit('pear')
    console.log(numPears)
  
    console.log('End')
  }
  //control();
  const forLoop = async _ => {
    console.log('Start')
    const fruitsToGet = ['apple', 'grape', 'pear']

    for (let index = 0; index < 50; index++) {
      const fruit = "apple"
      console.log(await getNumFruit("pear"));
      console.log("basla")
      const numFruit = await getNumFruit(fruit)
      console.log(numFruit)
      console.log("bitti")
    }
  
    console.log('End')
  }
  forLoop();