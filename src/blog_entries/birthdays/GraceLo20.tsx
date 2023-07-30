import { Text, Stack } from "@chakra-ui/react"
import { Helmet } from 'react-helmet'
import BlogImage from "../../components/blog/BlogImage"
import { useEffect } from "react"

const GraceLo20 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Helmet>
        <title>biojameskim | Grace Lo's 20th</title>
      </Helmet>

      <Text className='blog-title' fontSize='3rem' align={'center'} fontWeight={'medium'} pt={'12vh'} px='3' >
        Dear Grace
      </Text>

      <div className='blog-text'>
        <Text
          fontFamily='century'
          fontSize='2xl'
          align={'center'}
          fontWeight={'medium'}
          pt={'4vh'}
          pb={'10vh'} >
          April 7, 2023
        </Text>

        <Stack
          spacing={7}
          width={{ base: '85%', md: '60%' }}
          fontSize={{ base: '17', md: 'lg' }}
          fontFamily='century'>

          <Text pb='5vh'>Grace,</Text>

          <Text pb='5vh'>Happy happy birthday.</Text>

          <Text>Sheesh.</Text>
          <Text pb='5vh'>To think how far we’ve come since freshman year.</Text>

          <Text>I’m thankful that God’s placed a friend like you in my life.
            College is so fast paced and the environment around me is constantly
            changing but I’m thankful for your consistency— your consistency in
            the way that you show your care to the people around you.</Text>
          <Text>Whether it’s a small gesture of taping my suit pants up so that
            I don’t trip over it during felly dessert, or handling most (if not all)
            the logistics behind our greek peak trip and Boston trip, I’m thankful.</Text>
          <Text>I’m thankful that you’ve shown me how loving a Christ-centered
            friendship can look like, and I’m thankful that you’ve shown me how
            fun that can be too.</Text>

          <BlogImage
            src="../images/birthdays/grace-lo-20/gl_1.jpeg"
            alt="Grace and Angy hem my pants"
            caption="My pants are in good hands."
            orientation='v'
          />

          <Text pb='5vh'>I’m encouraged by the ways you serve in aaiv too.</Text>

          <Text>I get to serve alongside you in core, and I’m not gonna lie,
            sometimes it gets tiring not being able to be a normal member of
            sg anymore.</Text>
          <Text>But I’m glad I have you.</Text>
          <Text>I’m glad we get to care for a community together.</Text>
          <Text pb='5vh'>And I’m really glad to know that someone else is also
            eagerly trying to make aaiv a place where people can really feel loved
            and welcomed.</Text>

          <Text>That gets me going more than anything.</Text>

          <BlogImage
            src="../images/birthdays/grace-lo-20/gl_2.jpeg"
            alt="Thursday Small Group"
            caption="(Not so small) small group."
            orientation='v'
          />

          <Text>I feel like the more that I get to know you, the more I realize that there’s many different sides of you that I would’ve never ever predicted.</Text>
          <Text pb='5vh'>Both good…. and bad.</Text>

          <Text>You’re a lot goofier than I thought.</Text>
          <Text>You brighten the atmosphere, and you bring a lot of fun to the table.</Text>
          <Text>You also have quite a bit of aegyo…</Text>

          <BlogImage
            src="../images/birthdays/grace-lo-20/gl_3.jpeg"
            alt="Grace and a dog"
            caption={`“Dogs make me ‘tickly’”`}
            orientation='v'
          />

          <Text>But what I appreciate about you is that you’re also so real.</Text>
          <Text pb='5vh'>You say things as they are, and you don’t beat around the bush.</Text>

          <Text>I appreciated it a lot when you asked me the other day what me
            and Jonah were trying to do with the way we acted. I had a conversation
            with Jonah after and it helped keep both of us in check.</Text>
          <Text>I also appreciate when we have talks about the health of the
            fellowship and are able to have productive conversations about things
            we don’t like about the fellowship.</Text>
          <Text>Being able to honestly lay down our thoughts and critiques about
            different things in order to bring change is something that’s quite
            valuable to me.</Text>

          <BlogImage
            src="../images/birthdays/grace-lo-20/gl_4.jpeg"
            alt="Grace in hoodie"
            caption='“So… about small group merch…”'
            orientation='v'
          />

          <Text>20 is an exciting age to be.</Text>
          <Text>You’re in your second decade, where our peers and friends around
            us will start experiencing their first taste of post-grad adulting,
            their first jobs, and their first (and hopefully last) marriages.</Text>
          <Text>But wherever this next year and this next decade takes you, I pray
            that you’ll be able to better trust God in His plans for you and grow
            deeper in your love and understanding of who He is.</Text>
          <Text>I feel like my life is just a constant journey of realizing that
            God is truly in control. The sooner we acknowledge the plans that He
            has to prosper us and are able to obey Him, the sooner we’ll be able
            to grow deeper in our trust and faith in Him.</Text>

          <Text as='i' pt={'5vh'} paddingX={{ base: '1.75rem', md: '3.5rem' }}>
            “For I know the plans I have for you,” declares the Lord, “plans to
            prosper you and not to harm you, plans to give you hope and a future.”
          </Text>
          <Text textAlign='right'>- Jeremiah 29:11</Text>

          <Text>Cheers to 20, and to the rest of our sophomore year.</Text>

          <BlogImage
            src="../images/birthdays/grace-lo-20/gl_5.jpeg"
            alt="Grace and Me"
            caption="Goofy Grace"
            orientation='v'
          />

          <Text pb='10vh'>- James</Text>

        </Stack>
      </div>
    </div>
  )
}

export default GraceLo20