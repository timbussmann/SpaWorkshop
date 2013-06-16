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
            return storyRepository.UserStories.OrderByDescending(s => s.StackRank);
        }
    }
}
