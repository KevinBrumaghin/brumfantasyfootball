import PostBlock from "./PostBlock";
import "./Posts.css";
import "./PostBlock.css";

export default function Posts() {
  const user1 = {
    user: "TouchdownTerry87",
    timeDate: "January 1, 2023, 08:00 AM",
    title: "Fantasy Football Tips for Beginners",
    text: "Are you new to the world of fantasy football? This post will provide valuable insights and advice to help beginners get started. Learn about the basics of drafting, player research, and in-season management. Discover how to avoid common pitfalls and make informed decisions to improve your fantasy football game and have a successful season.",
  };
  const user2 = {
    user: "GridironGuru24",
    timeDate: "January 2, 2023, 10:15 AM",
    title: "Drafting Strategies for a Winning Fantasy Football Team",
    text: "Drafting the right players is crucial in fantasy football. In this post, we explore various drafting strategies, including zero RB, robust RB, and best player available approaches. We discuss the advantages and disadvantages of each strategy and provide tips on how to tailor your draft to your league format. With the right drafting strategy, you can build a strong foundation for a winning fantasy football team.",
  };
  const user3 = {
    user: "PigskinPro11",
    timeDate: "January 3, 2023, 02:30 PM",
    title: "The Importance of Studying Player Stats",
    text: "To succeed in fantasy football, understanding player statistics is key. This post delves into the significance of various stats, such as yards, touchdowns, receptions, and more. We also explain how to use this data to make informed decisions when drafting, starting, and trading players. By becoming a stats-savvy manager, you can gain a competitive edge in your fantasy football league.",
  };
  const user4 = {
    user: "EndzoneEddie55",
    timeDate: "January 4, 2023, 04:45 PM",
    title: "Injury Updates: Managing Your Fantasy Football Roster",
    text: "Injuries can have a significant impact on your fantasy football roster. This post provides insights into how to stay updated on player injuries, understand their implications, and make strategic roster moves. We also discuss the importance of handcuffing, waivers, and maintaining depth to mitigate the effects of injuries on your team.",
  };
  const user5 = {
    user: "RedZoneRonny88",
    timeDate: "January 5, 2023, 08:00 PM",
    title: "Waiver Wire Gems: Finding Hidden Fantasy Football Stars",
    text: "Unearthing hidden gems on the waiver wire can be the key to fantasy football success. In this post, we share tips on how to identify undervalued and emerging players who can make a big impact on your team. Learn about the art of waiver wire scouting and how to stay ahead of your league mates by acquiring the right players at the right time.",
  };
  const user6 = {
    user: "HuddleHero12",
    timeDate: "January 6, 2023, 09:30 AM",
    title: "Trade Strategies: Enhancing Your Fantasy Football Squad",
    text: "Strategic trades can significantly improve your fantasy football squad. This post offers guidance on how to negotiate trades effectively, target the right players, and ensure that both sides benefit. We discuss trade deadlines, fair value assessment, and how to address needs and weaknesses on your team through trade transactions.",
  };
  const user7 = {
    user: "RushingRoger4",
    timeDate: "January 7, 2023, 01:15 PM",
    title: "Weekly Start/Sit Advice for Fantasy Football Success",
    text: "One of the key decisions in fantasy football is determining which players to start and sit each week. This post provides insights into weekly start/sit strategies. We discuss matchups, player trends, and injury updates to help you make informed decisions and maximize your fantasy football points. Get the edge you need to dominate your league each week.",
  };
  const user8 = {
    user: "FieldGoalFrankie1",
    timeDate: "January 8, 2023, 11:45 AM",
    title: "Fantasy Football Playoff Strategies for Victory",
    text: "Reaching the playoffs is the goal, but winning the championship is the dream. In this post, we explore strategies for success in the fantasy football playoffs. Discover how to set up your team for a deep playoff run, make critical lineup decisions, and capitalize on favorable matchups. Secure that coveted championship trophy with our expert advice.",
  };
  const user9 = {
    user: "GoalLineGary22",
    timeDate: "January 9, 2023, 05:00 PM",
    title: "Player Sleepers: Under-the-Radar Picks for Fantasy Football",
    text: "Finding sleeper picks can be the key to fantasy football glory. This post introduces you to some under-the-radar players who have the potential to outperform expectations. We analyze their potential impact and why they might be hidden gems. Uncover valuable sleeper picks to gain a competitive advantage in your fantasy league.",
  };
  const user10 = {
    user: "SuperBowlSammy33",
    timeDate: "January 10, 2023, 10:30 AM",
    title: "The Thrill of Winning: Fantasy Football Championship Stories",
    text: "Champion stories inspire and motivate fantasy football enthusiasts. In this post, we share the experiences of past fantasy football champions. Learn about their strategies, triumphs, and the joy of winning it all. These stories will remind you that with dedication, skill, and a little bit of luck, anyone can become a fantasy football champion.",
  };

  let showPosts = true;
  const showHidePosts = () => {
    var ul = document.querySelector('#postsFeed');
    if (showPosts){
        ul.empty();
        showPosts = false;
    }
    else{
        var li = document.createElement('li')
        for(let i=0; i<11; i++){
            li.appendChild(`<PostBlock postInfo={user${i+1}} />`);
            ul.appendChild(li)
        }
        showPosts = true;
    }
  };

  return (
    <>
      <posts-block>
      <button onClick={showHidePosts} id='createButton'>SHOW/HIDE POSTS</button>
        <posts-area-outline>
          <div id="noPosts">
                    THERES NOTHING HERE...
                </div>
          {/* <ul id="postsFeed">
            <li>
              <PostBlock postInfo={user1} />
            </li>
            <li>
              <PostBlock postInfo={user2} />
            </li>
            <li>
              <PostBlock postInfo={user3} />
            </li>
            <li>
              <PostBlock postInfo={user4} />
            </li>
            <li>
              <PostBlock postInfo={user5} />
            </li>
            <li>
              <PostBlock postInfo={user6} />
            </li>
            <li>
              <PostBlock postInfo={user7} />
            </li>
            <li>
              <PostBlock postInfo={user8} />
            </li>
            <li>
              <PostBlock postInfo={user9} />
            </li>
            <li>
              <PostBlock postInfo={user10} />
            </li>
          </ul> */}
        </posts-area-outline>
      </posts-block>
    </>
  );
}
