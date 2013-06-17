namespace SpaWorkshop.Controllers
{
    using System.Linq;
    using System.Web.Http;
    using SpaWorkshop.Models;

    public class StoryController : ApiController
    {
        private readonly IStoryRepository storyRepository;

        public StoryController(IStoryRepository storyRepository)
        {
            this.storyRepository = storyRepository;
        }

        public UserStory GetStory(int id)
        {
            return this.storyRepository.UserStories.Single(u => u.Id == id);
        }

        public void PutStory(UserStory story)
        {
            this.storyRepository.UpdateUserStory(story);
        }
    }
}
