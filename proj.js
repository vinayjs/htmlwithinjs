let data=[
    {
    name:'Messi',
    age:'34',
},

{
    name:'Ronaldo',
    age:'38',
},

{
    name:'Mbabbe',
    age:'27',
},

{
    name:'Levondowski',
    age:'34',
},

{
    name:'Neymar',
    age:'32',
},

{
    name:'Sala',
    age:'32',
},


];

const info = document.querySelector('#info');

let details = data.map(function(item){

    return '<div>' +item.name + '     '+ 'is  ' + item.age  +  'years old'+ '</div>';
});

info.innerHTML =details.join('\n');