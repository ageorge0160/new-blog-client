import React from 'react'
import PostTile from './PostTile'

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: "Massive rock fall on El Capitan",
          content: "Anyone interested in the science behind rockfalls in Yosemite, do a Google Scholar search for 'Greg Stock rock fall Yosemite.' (Dr. Stock is the Yosemite park geologist and also a climber.) A number of papers are available for free, and even papers behind a paywall will usually let you view some of the figures. Also check out the Yosemite Extreme Resolution Panoramic Imaging Project. Geologists and volunteers have documented the major cliff faces in the park with extrem1ely high resolution photography so that when an event like this happens, they can go back and see exactly where the fractures occurred and how much volume was shed during the event.",
          created_by: "Steve",
        },
        {
          id: 2,
          title: "How long should I wait for a tendon injury?",
          content: "One of my friends told me to wait a month but I'm stubborn and I want to climb. I half listened, waited a week, and tried a challenging climb and my hand started to cramp up. Do I really need to wait a whole month? Would a couple of weeks suffice?",
          created_by: "Abby",
        },
        {
          id: 3,
          title: "Best way to film/photo while climbing?",
          content: "I want to take some video and/or photos while climbing, because family and friends always ask about it and I never have anything to show them. It would also be nice just to be able to look back at progress and stuff. Just got into climbing about 6 months ago and still learning a lot. Mostly go to a climbing gym nearby (cause rental gear for friends and stuff when I rope them into it), but lots of outdoor climbing nearby too. Figure this would be the best place to ask for tips and tricks people may have picked up from their experiences.",
          created_by: "Mo",
        },
        {
          id: 4,
          title: "Suggestions for hiking Yellowstone in mid May?",
          content: "I’m going to Yellowstone for the first time next May, and I know there’s many areas closed off due to snow. Does anyone have any experience hiking there during that time of the year? And if so any suggestions?",
          created_by: "Dan",
        },
        {
          id: 5,
          title: "Amazing hike at Glacier NP",
          content: "Went on the best hike at Glacier National Park in spring. I highly suggest hiking up Mount Cannon. Trailhead starts at Logan Pass",
          created_by: "Brett",
        },
        {
          id: 6,
          title: "Hiking boot help! Recommendations?",
          content: "I have a pair of Columbia boots, not sure the exact style but they are water-resistant ones which I prefer since we are year round hikers in Washington (still newbies though). I have had these boots for two years and never had an issue. Suddenly the past three months I have been getting KILLER blisters. I have done nothing different or new. Anyone have this happen? And what boots are everyone's favorites? I have over pronated feet so a good stable shoe with good arch support (or interchangeable innersoles), are a must, along with waterproof/resistant.",
          created_by: "Rafa",
        },
        {
          id: 7,
          title: "Help a new climber get stronger?",
          content: "I started climbing in late January of this year when a new gym opened up in my area. I've always liked the idea of climbing but soon found out it's a lot harder than it looks. When I first started out, I had never been on a wall before so it was all new. I'm also not very strong and work in IT so I sit for 9 hours a day. I struggled with V0s, but quickly progressed to sending V1s and most V2s. A few months back I did my first V3, but it looked like a pretty easy V3 to me (the first move was a big reach, but I'm tall so I think that's why I was able to do it). However I haven't really progressed since then.",
          created_by: "Bri",
        },
        {
          id: 8,
          title: "Route Setting App Follow up",
          content: "Hey again everybody, this is the last post about the app I'll do in this forum. First off I want to thank you so much for all of the previous responses! We never thought that this many would be interested in the app, thank you! This time it's another survey that is more about the functions that we want to have in the app based on the feedback we got on the last survey! If you could be so kind to respond to this one so that we know exactly what you want to have in the app we would be very grateful! Survey: https://goo.gl/forms/UENNPIIcF9ur7vL82",
          created_by: "Ange",
        },
        {
          id: 9,
          title: "Approach beta to Slice v10 in CT",
          content: "Any beta such as where to park or a gps coordinate would be helpful. Thanks!",
          created_by: "Marissa",
        }
      ]
    }
  }

  render () {
    return (
      <div className="PostPage">
      {this.state.posts.map(post =>
        <div key={post.id}>
          <PostTile post={post} />
        </div>
      )}
      </div>
    )
  }
}

export default Posts;
