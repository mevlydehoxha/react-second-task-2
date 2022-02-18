import ToggleButton from "../components/ToggleButton/ToggleButton";

const toggle_data=[{
    id:'1',
    title:'Why park a domain name in Parkname ?',
    content:'Parkname is the leading industry stardard for domain name parking and monetization services. We offer a wide variety of services to help you achive success.',
}];

function ToggleContent(){
    return(
        <div>
            <div className="ToggleContent">
                {toggle_data.map((data)=>
                <div key={data.id}>
                    <ToggleButton title={data.title} content={data.content} />
                </div>)}

            </div>
        </div>
    );
}
export default ToggleContent;