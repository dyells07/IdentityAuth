using ChatApp.Models;
using System;
using System.Collections.Generic;
using Xamarin.Forms;

namespace ChatApp.Services
{
    public class MessageService
    {
        // Thread-safe Singleton
        private static readonly Lazy<MessageService> _instance = new Lazy<MessageService>(() => new MessageService());
        public static MessageService Instance => _instance.Value;

        // Static user and message lists
        private readonly List<User> _users;
        private readonly List<Message> _chats;

        // Private constructor to initialize data
        private MessageService()
        {
            _users = InitializeUsers();
            _chats = InitializeChats();
        }

        // Initialize users
        private List<User> InitializeUsers()
        {
            return new List<User>
            {
                CreateUser("Alaya Cordova", "emoji1.png", "#FFE0EC"),
                CreateUser("Cecily Trujillo", "emoji2.png", "#BFE9F2"),
                CreateUser("Eathan Sheridan", "emoji3.png", "#FFD6C4"),
                CreateUser("Komal Orr", "emoji4.png", "#C3C1E6"),
                CreateUser("Sariba Abood", "emoji5.png", "#FFE0EC"),
                CreateUser("Justin O'Moore", "emoji6.png", "#FFE5A6"),
                CreateUser("Alissia Shah", "emoji7.png", "#FFE0EC"),
                CreateUser("Antoni Whitney", "emoji8.png", "#FFE0EC"),
                CreateUser("Jaime Zuniga", "emoji9.png", "#C3C1E6"),
                CreateUser("Barbara Cherry", "emoji10.png", "#FF95A2")
            };
        }

        // Helper to create a user
        private User CreateUser(string name, string image, string colorHex)
        {
            return new User
            {
                Name = name,
                Image = image,
                Color = Color.FromHex(colorHex)
            };
        }

        // Initialize chats
        private List<Message> InitializeChats()
        {
            var user6 = _users[5];
            var user1 = _users[0];
            var user3 = _users[2];
            var user2 = _users[1];
            var user4 = _users[3];

            return new List<Message>
            {
                new Message { Sender = user6, Time = "18:32", Text = "Hey there! What's up? Is everything ok?" },
                new Message { Sender = user1, Time = "14:05", Text = "Can I call you back later? I'm in a meeting." },
                new Message { Sender = user3, Time = "14:00", Text = "Yeah. Do you have any good song to recommend?" },
                new Message { Sender = user2, Time = "13:35", Text = "Hi! I went shopping today and found a nice t-shirt." },
                new Message { Sender = user4, Time = "12:11", Text = "I passed you on the ride to work today, see you later." }
            };
        }

        // Public methods to retrieve data
        public List<User> GetUsers() => _users;

        public List<Message> GetChats() => _chats;

        public List<Message> GetMessages(User sender)
        {
            return new List<Message>
            {
                new Message { Sender = sender, Time = "18:35", Text = "Hey there! What's up?" },
                new Message { Sender = null, Time = "18:36", Text = "Nothing. Just chilling and watching YouTube. What about you?" },
                new Message { Sender = sender, Time = "18:39", Text = "Same here! Been watching YouTube for the past 5 hours despite having so much to do! 😅" },
                new Message { Sender = sender, Time = "18:39", Text = "It's hard to be productive, man 😞" },
                new Message { Sender = null, Time = "18:42", Text = "Yeah I know. I'm in the same position 😂" }
            };
        }
    }
}
