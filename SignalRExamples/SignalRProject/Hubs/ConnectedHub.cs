using Microsoft.AspNetCore.SignalR;

namespace SignalRProject.Hubs
{
    public class ConnectedHub:Hub
    {
        public override Task OnConnectedAsync()
        {
            ConnectedUsers.myConnectedUsers.Add(Context.ConnectionId);
            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception? exception)
        {
            ConnectedUsers.myConnectedUsers.Remove(Context.ConnectionId);
            return base.OnDisconnectedAsync(exception);
        }

        public async Task SendMessage(string user, string message)
        {
            if (string.IsNullOrEmpty(user))
                await Clients.All.SendAsync("ReceiveMessage",user, message);
            else
                await Clients.Client(user).SendAsync("ReceiveMessage", user, message);
        }

    }
}
