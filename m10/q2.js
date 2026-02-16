//Convert array of objects to object (key by ID)
const user=[
    {id:1,name:"Sridhar",age:25},
    {id:2,name:"Ravi",age:30},
    {id:3,name:"Anu",age:28}
]
const userbyid=user.reduce((acc,curr)=>{
    acc[curr.id]=curr;
    return acc;
},{});
console.log(userbyid[1])

// Group by multiple properties

const users=[
    {id:1,name:"Sridhar",role:"admin",city:"Chennai"},
    {id:2,name:"Ravi",role:"user",city:"Bangalore"},
    {id:3,name:"Anu",role:"user",city:"Chennai"},
    {id:4,name:"Kumar",role:"admin",city:"Bangalore"}
];
const grouped=users.reduce((acc,curr)=>{
    const {role,city}=curr;
    if(!acc[role]){
        acc[role]={};
    }
    if(!acc[role][city]){
        acc[role][city] =[];
    }
    acc[role][city].push(curr);
    return acc;
},{});
console.log(grouped["admin"]);

//Pivot data structure

const sales = [
  { product: "Laptop", month: "Jan", revenue: 1000 },
  { product: "Laptop", month: "Feb", revenue: 1200 },
  { product: "Phone",  month: "Jan", revenue: 800 },
  { product: "Phone",  month: "Feb", revenue: 950 },
];
const pivot=sales.reduce((acc,{product,month,revenue})=>{
    if(!acc[product]){
        acc[product]={};
    }
    acc[product][month]=revenue;
    return acc;             
},{});
console.log(pivot["Laptop"]);

//Normalize nested data
const posts = [
  {
    id: 1,
    title: "JS Basics",
    author: {
      id: 101,
      name: "Sridhar"
    },
    comments: [
      { id: 1001, text: "Great post!" },
      { id: 1002, text: "Nice explanation!" }
    ]
  },
  {
    id: 2,
    title: "Advanced JS",
    author: {
      id: 101,
      name: "Sridhar"
    },
    comments: [
      { id: 1003, text: "Helpful!" }
    ]
  }
];
const normalized={posts:{byId:{},allIds:[]},authors:{byId:{},allIds:[]},comments:{byId:{},allIds:[]}};
posts.forEach((post)=>{
    const {id,title,author,comments}=post;
    normalized.posts.byId[id]={
        id,
        title,
        author:author.id,
        comments:comments.map(c=>c.id)
    };
    normalized.posts.allIds.push(id);
    if(!normalized.authors.byId[author.id]){
        normalized.authors.byId[author.id]=author;
        normalized.authors.allIds.push(author.id);
    }  
    comments.forEach((comment)=>{
        normalized.comments.byId[comment.id]=comment;
        normalized.comments.allIds.push(comment.id);
    });     
})
console.log(normalized.posts.byId[1]);


// Denormalize flat data
const denormalized=normalized.posts.allIds.map((postId)=>{
    const post=normalized.posts.byId[postId];
    const author=normalized.authors.byId[post.author];
    const comments=post.comments.map((commentId)=>normalized.comments.byId[commentId]);
    return {...post,author,comments};
}); 
console.log(denormalized[0]);


// Transform snake_case to camelCase keys
//why because every backend API response is in snake_case and we want to convert it to camelCase for better readability in JS
function toCamel(str){
    return str.replace(/_([a-z])/g,(_,letter)=>letter.toUpperCase());
}
console.log(toCamel("user_name"));

// Remove empty properties recursively
const data = {
  name: "Sridhar",
  age: null,
  email: "",
  address: {
    city: "Chennai",
    state: undefined,
    zip: ""
  },
  hobbies: ["coding", "", null],
  metadata: {}
};
function removeEmpty(obj){
    if(Array.isArray(obj)){
        return obj.filter(item=>item!==null && item!=="");   
    }else if(typeof obj === "object" && obj !== null){
        const newObj={};    
        for(let key in obj){
            const value=removeEmpty(obj[key]); 
            if(value!==null && value!=="" && !(typeof value === "object" && Object.keys(value).length === 0)){
                newObj[key]=value;
            }
        }
        return newObj;
    }   else{   
        return obj;
    }
}   
console.log(removeEmpty(data));

//Merge arrays of objects by key
const arr1 = [
  { id: 1, name: "Sridhar" },
  { id: 2, name: "Rock" }
];

const arr2 = [
  { id: 1, age: 22 },
  { id: 2, age: 25 }
];
function mergeById(arr1,arr2,key){
    const map=arr2.reduce((acc,curr)=>{
        acc[curr[key]]=curr;
        return acc;
    },{});
    return arr1.map((item)=>{
        return {...item,...map[item[key]]};
    });
}
console.log(mergeById(arr1,arr2,"id")[0]);


//Transform tree structure to flat list
const tree = [
  {
    id: 1,
    name: "A",
    children: [
      {
        id: 2,
        name: "B",
        children: [
          { id: 4, name: "D", children: [] }
        ]
      },
      { id: 3, name: "C", children: [] }
    ]
  }
];

function flatten(nodes,res=[]){
    for(const node of nodes){
        const {children,...rest}=node;
        res.push(rest);
        if(children && children.length>0){
            flatten(children,res);
        }
    }
    return res;
}
console.log(flatten(tree)[0]);

// Sort objects by nested property
const useer1 = [
  { id: 1, profile: { age: 30 } },
  { id: 2 },
  { id: 3, profile: { age: 25 } }
];
useer1.sort((a,b)=>{
    const ageA=a.profile?.age ?? Infinity;
    const ageB=a.profile?.age ?? Infinity;
    return ageA-ageB;   
});
console.log(useer1[0]);
