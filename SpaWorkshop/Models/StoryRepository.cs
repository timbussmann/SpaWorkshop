namespace SpaWorkshop.Models
{
    using System.Collections.Generic;

    public class StoryRepository : IStoryRepository
    {
        public StoryRepository()
        {
            this.UserStories = new[]
                {
                    new UserStory() {Title = "Demo"},
                };
        }

        public IEnumerable<UserStory> UserStories { get; private set; }
    }
}