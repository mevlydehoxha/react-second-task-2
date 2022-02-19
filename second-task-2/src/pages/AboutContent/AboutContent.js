import About from '../../components/About/About';
import image from './placeholder-image.jpg';

const about_data=[{
    id:'1',
    image:{image},
    title:'About Us',
}];

function AboutContent(){
    return(
        <div>
            {about_data.map((data)=>
            <div key={data.id}>
                <About title={data.title}/>
            </div>
            )}
        </div>
    );
}
export default AboutContent;