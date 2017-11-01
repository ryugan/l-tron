
namespace ApplicationCore.Interfaces
{
    public interface IGridObject
    {
        /// <summary>
        /// Start IGridWalker
        /// </summary>
        void Start();

        /// <summary>
        /// Pause IGridWalker
        /// </summary>
        void Pause();

        /// <summary>
        /// Pause IGridWalker
        /// </summary>
        void Stop();

        /// <summary>
        /// Restart IGridWalker
        /// </summary>
        void Restart();

        /// <summary>
        /// Initialize IGridWalker
        /// </summary>
        void Initialize();

        /// <summary>
        /// Return if IGridWalker is active
        /// </summary>
        /// <return>bool</return>
        bool IsActive();

        /// <summary>
        /// Return if IGridWalker is alive
        /// </summary>
        /// <return>bool</return>
        bool IsAlive();

        /// <summary>
        /// Change if IGridWalker is alive and confirm new status
        /// </summary>
        /// <param>bool</param>
        /// <return>bool</return>
        bool IsAlive(bool isAlive);

        /// <summary>
        /// Walk IGridWalker
        /// </summary>
        void Walk();
    }
}
