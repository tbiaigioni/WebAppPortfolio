using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppPortfolio.Services
{
    public class NullMailService : IMailService
    {

        public NullMailService(ILogger<NullMailService> logger)
        {
            Logger = logger;
        }

        public ILogger<NullMailService> Logger { get; }

        public void SendMessage(string to, string subject, string body)
        {
            Logger.LogInformation($"To: {to} Subject: {subject} Body: {body}");
        }

    }
}
