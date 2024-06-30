import { faker } from "@faker-js/faker";

const fake_news = () => ({
  title: faker.lorem.paragraph({ min: 1, max: 1 }),
  desc: faker.lorem.paragraph(),
  by: faker.person.fullName(),
  date: faker.date.anytime(),
  image: faker.image.urlPicsumPhotos(),
});

const fake_topic = () => faker.word.sample(5);

const fake_topic_img = () => ({
  image: faker.image.urlPicsumPhotos(),
  title: faker.word.sample(5),
});

const forloop_fake = (data, length) => {
  const faked = [];

  Array.from({ length: length }).forEach(() => {
    faked.push(data());
  });

  return faked;
};

export const generatedFakeTopic = (length) => {
  return forloop_fake(fake_topic, length);
};

export const generatedFakeTopicImg = (length) => {
  return forloop_fake(fake_topic_img, length);
};

export const generatedFakeNews = (length) => {
  return forloop_fake(fake_news, length);
};
