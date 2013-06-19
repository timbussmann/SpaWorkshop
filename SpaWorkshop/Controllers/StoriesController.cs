namespace SpaWorkshop.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Http;
    using SpaWorkshop.Models;

    public class StoriesController : ApiController
    {
        private readonly IStoryRepository storyRepository;

        public StoriesController(IStoryRepository storyRepository)
        {
            this.storyRepository = storyRepository;
        }

        public IEnumerable<UserStory> GetStories()
        {
            // return the stories ordered by StackRank instead of null
            return null;
        }
    }
}
