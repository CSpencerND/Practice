# from pprint import pprint
import requests
from bs4 import BeautifulSoup


# # Making the soup
def make_soup():
    response = requests.get('https://www.reddit.com/r/OnePiece/search/?q=spoilers&restrict_sr=1')
    webpage = response.content
    return BeautifulSoup(webpage, 'html.parser')


soup = make_soup()


# # Spoilers front page
def get_current_chapter():
    posts = soup.select('h3')
    top_post = posts[1].get_text()
    current_chapter = top_post.split()[-2]
    return f"The current chapter is {current_chapter}"


def get_current_chapter_link():
    # links = []
    a_tags = soup.select('a')[6]
    # for a in a_tags:
    #     links.append(a['href'])
    return a_tags['href']


# # New chapter page
def new_soup():
    response = requests.get(get_current_chapter_link())


print(get_current_chapter())
print(get_current_chapter_link())
