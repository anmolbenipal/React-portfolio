import projectOne from '../assets/project-1.png';
import projectTwo from '../assets/project-2.png';
import projectThree from '../assets/project-3.png';

const projects={
    1:{
            title:"MAPmyFITNESS",
            image : projectOne,
            description:(
                <><p>The fitness tracker website is a comprehensive online platform designed to assist individuals in monitoring and managing their fitness goals and activities.<br/>
                Technologies Used - HTML, CSS, Bootstrap, Javascript, React</p></>
            ),
            github:"https://github.com/anmolbenipal/MAPmyFITNESS2",
            demo:"https://anmolbenipal.github.io/MAPmyFITNESS2/",
        },
    2:{
            title:"Productivity App",
            image : projectTwo,
            description:(
                <><p>tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit</p></>
            ),
            github:"https://github.com",
            demo:"https://netlify.com",
        },
    3:{
            title:"Food Delivery App",
            image : projectThree,
            description:(
                <><p>agittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id </p></>
            ),
            github:"https://github.com",
            demo:"https://netlify.com",
        },
    
};
export default projects;