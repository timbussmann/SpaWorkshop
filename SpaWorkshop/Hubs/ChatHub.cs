using Microsoft.AspNet.SignalR;

namespace SpaWorkshop.Hubs
{
    public class ChatHub : Hub
    {
         public void SendMessage(string message)
         {
             Clients.Others.AddMessage(message);
         }
    }
}