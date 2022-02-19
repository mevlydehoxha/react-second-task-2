import Article from '../components/Article/Article';
import ArticleItems from '../ArticlesContent/ArticlesItems';


const article_data=ArticleItems;

function ArticleContent(){
    return(
        <div>
            {article_data.map((data)=>
            <div key={data.id}>
                <Article article_title={data.article_title} article_description={data.article_description}/>
            </div>
            )}
        </div>
    );
}
export default ArticleContent;