class Config{
    
}

class DevelopmentConfig extends Config{
    public postsUrl = "http://localhost:8080/posts/";
    public commentsUrl = "http://localhost:8080/comment/";
    public registerUrl = "http://localhost:8080/register/"
    public loginUrl = "http://localhost:8080/login/"
    public adminPostUrl = "http://localhost:8080/admin/post/";
    public adminImageUrl = "http://localhost:8080/admin/image/";
    public adminCommentsUrl = "http://localhost:8080/admin/comment/";
}

class ProductionConfig extends Config{
    public postsUrl = "http://localhost:8080/posts/";
    public commentsUrl = "http://localhost:8080/comment/";
    public registerUrl = "http://localhost:8080/register/"
    public loginUrl = "http://localhost:8080/login/"
    public adminPostUrl = "http://localhost:8080/admin/post/";
    public adminImageUrl = "http://localhost:8080/admin/image/";
    public adminCommentsUrl = "http://localhost:8080/admin/comment/";
}


const appConfig = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default appConfig;