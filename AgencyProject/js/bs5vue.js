const {createApp,ref}  = Vue;

createApp({
    data() {
        return{
            Services:[
                {icon: "fa-shopping-cart", heading:"E-Commerce", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
                {icon: "fa-laptop", heading:"Responsive Design", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
                {icon: "fa-lock", heading:"Web Security", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."}
            ]
        }
    }
}).mount("#services");

createApp({
    data() {
        return{
            Portfolio:[
                {portfolioModal:"#portfolioModal1",img:"img/portfolio/roundicons.png",name:"Round Icons",text:"Graphic Design"},
                {portfolioModal:"#portfolioModal2",img:"img/portfolio/startup-framework.png",name:"Startup Framework",text:"Website Design"},
                {portfolioModal:"#portfolioModal3",img:"img/portfolio/treehouse.png",name:"Treehouse",text:"Website Design"},
                {portfolioModal:"#portfolioModal4",img:"img/portfolio/golden.png",name:"Golden",text:"Website Design"},
                {portfolioModal:"#portfolioModal5",img:"img/portfolio/escape.png",name:"Escape",text:"Website Design"},
                {portfolioModal:"#portfolioModal6",img:"img/portfolio/dreams.png",name:"Dreams",text:"YEAH"}
            ]
        }
    }
}).mount("#portfolio")