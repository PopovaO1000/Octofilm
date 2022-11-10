class PostController{
    async authUser(req, res){
        try{

        }
        catch (e){
            res.status(500).json(e);
        }
    }
}

export default new PostController();