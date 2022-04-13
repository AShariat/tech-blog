const { Post } = require("../models");

const postData = [
  {
    title:
      "NATIONAL BROADBAND MAPPING COALITION FILES COMMENTS URGING FCC TO INCORPORATE VERIFIABLE DATA",
    post_text:
      "The National Broadband Mapping Coalition, a cross-disciplinary group of network analysts, policy experts, digital inclusion advocates, and technologists, submitted comments to the Federal Communications Commission (FCC) regarding its Proposed Rule for Empowering Broadband Consumers Through Transparency. The rule, which was proposed on January 6, 2022, would require Internet service providers (ISPs) to display standardized labels with information on pricing, including introductory rates, broadband speeds, data caps, and more to consumers at the point of sale. “It’s encouraging to see this step to require ISPs to provide consumers with more transparency into the broadband service that they rely on every day,” says Dustin Loup, the Coalition’s Program Manager. “But we need to make sure that the content and design of these labels will provide the most useful and relevant information—based on verifiable data—to consumers. In our comments, the National Broadband Mapping Coalition offers specific guidelines for ensuring the labels are as clear and valuable as possible. “Two key barriers consumers face when choosing a service provider is a lack of access to verifiable data, and an insufficient understanding of how different aspects of Internet performance are measured and impacted. Broadband consumer labels could be a significant step towards educating the broader public about how to evaluate and select the best Internet plan for themselves and their families, in addition to providing wider access to performance metrics that will inform the research, policy, and advocacy communities. “Connectivity is critical; we’re living in a time when Internet access, reliability, and affordability is perhaps more important than it has ever been before. The FCC has the opportunity to significantly impact how consumers advocate for themselves in the market, and we are hopeful the Coalition’s comments provide actionable feedback to make this program effective.”",
    user_id: "1",
  },
  {
    title: "HOW TO MAKE SURE DIGITAL TECHNOLOGY WORKS FOR THE PUBLIC GOOD",
    post_text:
      "AMHERST, Mass. – The Internet of Things (IoT) is completely enmeshed in our daily lives, a network of connected laptops, phones, cars, fitness trackers—even smart toasters and refrigerators—that are increasingly able to make decisions on their own. But how to ensure that these devices benefit us, rather than exploit us or put us at risk? New work, led by Francine Berman at the University of Massachusetts Amherst, proposes a novel framework, the “impact universe,” that can help policymakers keep the public interest in focus amidst the rush to adopt ever-new digital technology. “How,” asks Berman, Stuart Rice Honorary Chair and Research Professor in UMass Amherst’s Manning College of Information and Computer Sciences (CICS), “can we ensure that technology works for us, rather than the other way around?” Berman, lead author of a new paper recently published in the journal Patterns, and her co-authors sketch out what they call the “impact universe”—a way for policymakers and others to think “holistically about the potential impacts of societal controls for systems and devices in the IoT”. One of the wonders of modern digital technology is that it increasingly makes decisions for us on its own. But, as Berman puts it, “technology needs adult supervision.” The impact universe is a way of holistically sketching out all the competing implications of a given technology, taking into consideration environmental, social, economic and other impacts to develop effective policy, law and other societal controls. Instead of focusing on a single desirable outcome, sustainability, say, or profit, the impact universe allows us to see that some outcomes will come at the cost of others. “The model reflects the messiness of real life and how we make decisions,” says Berman, but it brings clarity to that messiness so that decision makers can see and debate the tradeoffs and benefits of different social controls to regulate technology. The framework allows decision makers to be more deliberate in their policy-making and to better focus on the common good. Berman is at the forefront of an emerging field called public interest technology (PIT), and she’s building an initiative at UMass Amherst that unites campus students and scholars whose work is empowered by technology and focused on social responsibility. The ultimate goal of PIT is to develop the knowledge and critical thinking needed to create a society capable of effectively managing the digital ecosystem that powers our daily lives. Berman’s co-authors, Emilia Cabrera, Ali Jebari and Wassim Marrakchi, were Harvard undergraduates and worked with Berman on the paper during her Radcliffe Fellowship at Harvard. The fellowship gave Berman a chance to work broadly with a multidisciplinary group of scholars and thinkers, and to appreciate the importance of designing, developing, and framing societal controls so that technology promotes the public benefit. “The real world is complex and there are always competing priorities,” says Berman. “Tackling this complexity head-on by taking the universe of potential technology impacts into account is critical if we want digital technologies to serve society rather than overwhelm it.”",
    user_id: "2",
  },
  {
    title: "THE 5G AVIATION CRISIS THAT NEVER SHOULD HAVE HAPPENED",
    post_text:
      "Today is the day that High Speed 5G cellular service is being launched by both AT&T and Verizon based on their very expensive Spectrum Auction wins at the FCC last year. The Aviation world including the FAA, commercial airline, and private aircraft communities, airport authorities, and others have fought this roll-out for the last several months, initially focusing on safety of life issues and more recently talking about massive disruptions in airline flight schedules. This has all been headline news with claims and counterclaims between the two major cellular providers operating in the contested spectrum band and the aviation industry. For their part, the cellular providers point to over 40 nations who have successfully deployed 5G in the so-called C-Band spectrum while the aviation community counters with the fact that these countries have significant restrictions on the use of the band which until recently did not exist in the U.S. All this has made for a very confusing and contentious situation where the lack of information and the failures of the FCC and FAA to resolve their differences in a timely fashion while the cellular carriers delay their roll-out and alter their plans on an almost weekly basis. Today (January 19) is the day when all the hoopla finally comes to a head with AT&T and Verizon beginning to deploy their high speed 5G service minus any deployments within a few miles of a major U.S. airport. That is the top-level state of play, but is there really a problem and going forward what should be done now? First, the unfortunate truth is that there is a real problem, but it is what can be described as an “edge case” problem, that is, a problem that only occurs in unusual circumstances. So, what is the problem? Fundamentally, the problem is a design issue with the aviation industry’s radio or radar altimeters. These are the devices that sense how high the aircraft is above the ground and especially in bad weather when ground visibility is limited, this is a crucial component of an aircraft’s ability to safely land. Understanding the Technical Challenges Now to get a little technical. The altimeters are supposed to operate in their assigned spectrum band between 4.2 and 4.4 GHz. Unfortunately, when these devices were originally designed, they had very low power neighbors, i.e., satellites beaming their information to the Earth from very distant orbits. Since the altimeters operate on a radar principle, looking for a signal reflected from the ground their receivers couldn’t detect the very low power neighboring satellite signals. This led the early designers of the altimeters to decide they really could ignore their assigned spectrum boundaries and as a result they allow transmitted energy far outside their band into the receiver. For decades this was not an issue given their quiet neighborhood, but with new neighbors now moving in (AT&T and Verizon), the spectral space that they were allowing into the receiver is now a potential problem. Adding a little more technical information to the mix, AT&T and Verizon have now (as of 19 January 2022) commenced operation in the spectrum range from 3.7 GHz to 3.8 GHz, i.e., 400 MHz away from the altimeter band. To put this in perspective, the whole FM radio band (all stations) is only 20 MHz wide, so the spectral separation between the new 5G cellular band and the altimeter band is very, very large. The FCC for its part when granting the use of the band (which will ultimately be expanded to cover 3.7 to 3.98 GHz) determined that there shouldn’t be an issue because of the vast separation between the 5G cellular use of the new spectrum and the altimeter spectrum allocation. Unfortunately, this is not the case for old, technically “wide open” altimeters. These radar altimeters may send out a signal and be unable to discern the reflected signal because of energy from the far away 5G towers entering the receiver, causing the radar altimeter to either fail to function or possibly provide a false reading. To make matters worse, though the altimeters were once only a standalone instrument that had an altitude indicator on the pilot’s panel, today the altimeter is highly integrated into the avionics for modern aircraft. If, for instance, the altimeter says the aircraft is still in the air when it has actually landed, it will cause the reverse thrusters and spoilers that normally create a rapid reduction in the airplane’s speed on the ground to not operate. I am told that in icy runway conditions the lack of reverse thrusters and spoilers could increase the landing distance by as much as four times, which for short runway airports (e.g., Chicago’s Midway Airport) with the potential for poor landing and runway conditions could be an enormous problem. How Do We Get Out of This Mess? First, most of the time the situation is not nearly as bad as the dire challenge the worst-case scenarios would suggest. Modern altimeters are well designed and do not have the problem of looking far outside their assigned band. The addition of a very low-cost component, historically a small piece of ceramic (called a filter) at the antenna input to the altimeter receiver, eliminates the issue of looking outside the altimeter’s assigned band. Of course, retrofitting and certifying a new radar altimeter in an aircraft is a non-trivial expense in both time and dollars. Happily, most modern altimeters have filters and will not experience any 5G interference problem. The FAA is currently determining the nature of the altimeters on various aircraft and certifying those that have more robust designs. Those that don’t should be required to replace their altimeter or suffer a significant reduction in the weather conditions in which they are allowed to fly. Given this small, but critical, step, the aviation world can be returned to a safe environment in the presence of 5G technology and AT&T and Verizon can be fully deploy their new C-Band systems including deployments around airports. As an important aside, while all of this turmoil has been proceeding, it should be noted that T-Mobile’s deployment of high speed 5G is currently unimpeded by these concerns since it operates in spectrum that is even further away from the altimeter band at 2.5 GHz. Hopefully this article will help many of you to unravel this high-profile issue. I will appreciate hearing any questions or comments you may have on this important issue.",
    user_id: "3",
  },
  {
    title:
      "THE FUTURE THAT OUR CONNECTED WORLD WILL CREATE: A VISION FROM MARCONI FELLOW ANDREA GOLDSMITH",
    post_text:
      "“Now is the most exciting time for the future of wireless networks,” begins Andrea Goldsmith, 2020 Marconi Fellow and Dean of Engineering and Applied Science at Princeton University. Goldsmith, a wireless maven whose contributions to the field have shaped our connected world, gave the closing keynote address during the Marconi Society’s symposium, The Decade of Digital Inclusion. Registered participants can watch this and 20+ other sessions on demand, and $49 general admissions passes are available through December 15, 2021. In her speech, Goldsmith shares her boundless optimism about Information and Communications Technology (ICT), a field that continues to have a profound impact on economics, education, healthcare, governance, and culture. She challenges researchers to focus on how their creative applications of technology can serve digital inclusion, particularly through the development of 6G. A celebrated teacher and mentor, Goldsmith asks leaders in the audience to remember that the diversity of the field is heavily influenced by their willingness to mentor and guide younger researchers. She ends her keynote by challenging everyone to bring someone along as they advance in their careers.",
    user_id: "1",
  },
  {
    title:
      "INTERNET FOR ALL: WHAT IS THE ROLE OF GOVERNMENT? FOUR KEY TAKEAWAYS",
    post_text:
      "The pandemic has given us both the political will and hopefully the funding to truly rethink the role of government in ensuring not only Internet access, but digital equity for all. Even once infrastructure funding bills are passed, the road forward offers many opportunities for the government to create truly innovative policies, rules, and funding mechanisms—and potential points of failure if key changes in these areas do not occur. At The Decade of Digital Inclusion, the Marconi Society brings together leaders to provide advice and perspectives on the changes that need to happen to ensure that we use this once-in-a-generation opportunity to truly give everyone in the U.S. the opportunities of the network. Moderator: Blair Levin, Nonresident Senior Fellow, Brookings Institution Panelists: Steve Coran, Attorney, Lerman Senter; Chris Lewis, President and CEO, Public Knowledge; Christina Mason, Government Affairs, Dish Network; Chris Mitchell, Director, Institute for Local Self-Reliance The wide-ranging discussion covered key areas at the intersection of policy, technology, and practitioner insights. The panel is available on demand for registered participants in The Decade of Digital Inclusion.",
    user_id: "2",
  },
  {
    title:
      "MEET DOREEN BOGDAN-MARTIN, INTERNATIONAL CHAMPION FOR DIGITAL EQUITY",
    post_text:
      "With decades of experience in international technology policy, Doreen Bogdan-Martin’s incisive voice and global perspective will kick off The Decade of Digital Inclusion, the Marconi Society’s upcoming master class and symposium in connecting the next billion. Bogdan-Martin, currently the Director of the Telecommunication Development Bureau of the International Telecommunication Union, is a renowned leader in digital inclusion. We interviewed her about the challenges and opportunities of the next decade of connectivity. We must never forget that right now, around half the people on the planet have still never, ever been online. Doreen Bogdan-Martin Your keynote for The Decade of Digital Inclusion focuses on the future of the digital landscape and what needs to happen at the intersection of technology, policy, regulation, and advocacy to ensure inclusive connectivity. Can you share a preview of your thoughts on this topic? Coordinated action to close the connectivity gap has become urgent. But it is not just about getting network infrastructure in place. Better coverage and connectivity needs to be supported by: agile, enlightened regulation to stimulate vibrant national markets for digital services digital inclusion programs that ensure all people—including children and others who are vulnerable like people with disabilities, rural dwellers, the elderly, marginalized communities—are empowered with the digital skills they need to take advantage of connectivity policies to ensure digital services are affordable for most people support for digital innovation and entrepreneurship to create sustainable local digital ecosystems and create devices and services tailored to the needs of local users. All of these elements will be vitally important to the success of our efforts to finally bridge the digital divide. Why does connectivity matter? COVID-19 has pushed us rapidly towards an inflection point, where broadband connectivity has moved from desirable to essential. Broadband has enabled the lucky few to keep earning, keep learning, and stay connected to family and loved ones. We must never forget that right now, around half the people on the planet have still never, ever been online. In the wake of the pandemic, I believe there is a growing community of world leaders who understand that we need to take urgent and drastic action to change the paradigm if we are to build the resilience needed to face future global challenges. How would you characterize the current state of global connectivity? What are the major challenges and opportunities? The digital divide has become the new face of global inequality. Even among the roughly four billion people we count as ‘connected,’ not all fully enjoy the kind of fast, affordable connections that are taken for granted in the handful of wealthy countries. Let’s not forget, too, that even in the world’s most developed economies, the high cost of devices and poor rural coverage is still keeping many offline, particularly among the most disadvantaged individuals and communities. For operators and content providers there are lots of opportunities—but no-one is going to be able to do this alone. We need to work together in partnership, and to support infrastructure roll-out with digital skills development, support for local innovation, and content that is meaningful and accessible to new types of user demographics. How has the pandemic affected the global community’s understanding of digital inclusion? We have seen a rapid acceleration of digital transformation, particularly in countries where that process was already well underway. And, with the UN Secretary-General’s Roadmap for Digital Cooperation, we have also seen a system-wide embrace of digital solutions by the UN family, particularly in the area of the Sustainable Development Goals (SDGs). COVID-19 has effectively derailed already slow global progress on many of these goals. With the 2030 deadline now less than a decade away, there is universal recognition that digital is the only way we will get the SDG process back on track. How does demographic diversity in STEM fields shape the future of technology? At this time of unprecedented upheaval, the global tech sector will benefit enormously from greater diversity. We need bright young teams in developing countries around the world to start building the apps and services that will be meaningful to local communities. And we need more young women to enter the tech sector and bring their own perspectives to the development of new services and devices. We’ve already seen the phenomenal global success of the mobile money services pioneered in Africa. We need to work together to empower countries to nurture this kind of home-grown tech culture that can deliver compelling and relevant services, in appropriate formats and languages. How does telecommunications regulation shape everyday people’s experience of access and affordability? Progressive Information and Communications Technology (ICT) sector reform is the key to bridging the digital divide, and regulators are the architects of that bridge-building project. The decisions made by regulators have an enormous impact on the health of local ICT markets; on affordability, on consumer choice, on investment. Today, regulatory best-practice should emphasize collaborative ‘5th generation’ frameworks that prioritize infrastructure sharing, consultation, and innovative partnerships between an increasingly diverse range of players to drive progress on national connectivity targets. A graphic of a laptop showing people on a video call What role do young people play in the future of connectivity? Young people are natural and enthusiastic adopters of digital technology, and a new generation of young digital natives is already defining and developing the digital platforms and services that are reshaping our world. Youth is quite simply a vital and increasingly indispensable voice at the table, which is why my Bureau launched our Generation Connect initiative last year to engage more proactively with young people from all around the world. We’ll be holding our first Generation Connect Global Youth Summit next year, just ahead of our four-yearly World Telecommunication Development Conference, and we will be feeding the outcomes of those discussions by youth representatives into the WTDC conference process. How do you hope the state of digital inclusion will look by 2030? While it would be unrealistic to imagine that we will achieve universal connectivity in just under 10 years, it is extraordinary what can be achieved, given the political will. We’ve already seen that highly-connected countries have had much better success in weathering the current health crisis. I am convinced that the message about the importance of connectivity has gotten through to many global leaders, and that we will see dramatically accelerating levels of digital access in much of the developing world in the coming five years. That in turn can create a virtuous circle, where the benefits that rapidly accrue to nations that prioritize connectivity encourage neighbouring countries to adopt a similar strategy. If we take this path, a fully connected planet could be just over the horizon. Tickets for The Decade of Digital Inclusion are available now. Join Ms. Bogdan-Martin on October 22, 2021, in Washington, D.C., or experience the symposium and master class virtually from anywhere in the world.",
    user_id: "3",
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;