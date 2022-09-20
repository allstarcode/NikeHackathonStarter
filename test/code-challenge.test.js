const {
  newSneakers,
  isThatMichaelJordan,
  areYouM,
  mostViewsThreeSneakers,
  mostViews,
  validateEmail,
  validateEmailWithError,
  getInitials,
  howRepetitiveAreYou,
  spanishToEnglish,
  getNames,
  getUniqueSneakers,
  getMostViewedSneakers,
} = require('../code-challenge.js');
const assert = require('assert');

describe('Hype Machine', function () {
  it('hypes the new Air Force 1 sneakers', function () {
    assert.strictEqual('New sneakers Air Force 1 dropping soon!', newSneakers('Air Force 1'));
  });
  it('hypes the new Nike Waffle Racer sneakers', function () {
    assert.strictEqual(
      'New sneakers Nike Waffle Racer dropping soon!',
      newSneakers('Nike Waffle Racer')
    );
  });
  it('hypes the new Air Jordan 11 sneakers', function () {
    assert.strictEqual('New sneakers Air Jordan 11 dropping soon!', newSneakers('Air Jordan 11'));
  });
});

describe('Are you Michael Jordan?', function () {
  it('is Michael Jordan', function () {
    assert.strictEqual(isThatMichaelJordan('Michael Jordan'), true);
  });

  it('is not Michael Jordan (Michael Scott)', function () {
    assert.strictEqual(isThatMichaelJordan('Michael Scott'), false);
  });

  it('is not Michael Jordan (Michael B. Jordan)', function () {
    assert.strictEqual(isThatMichaelJordan('Michael B. Jordan'), false);
  });
});

describe('Are You Michael Jordan? - Bonus (Case Insensitive)', function () {
  it('is MICHAEL JORDAN', function () {
    assert.strictEqual(isThatMichaelJordan('MICHAEL JORDAN'), true);
  });
});

describe('Athletes of M', function () {
  it('is M (Michael Jordan)', function () {
    assert.strictEqual(areYouM('Michael Jordan'), true);
  });

  it('is M (Michael Phelps)', function () {
    assert.strictEqual(areYouM('Michael Phelps'), true);
  });

  it('is not M (Tiger Woods)', function () {
    assert.strictEqual(areYouM('Tiger Woods'), false);
  });

  it('is not M (Jessica Hull)', function () {
    assert.strictEqual(areYouM('Jessica Hull'), false);
  });

  it('is not M (Derek Jeter)', function () {
    assert.strictEqual(areYouM('Derek Jeter'), false);
  });
});

describe('Most Views - Part 1', function () {
  it('returns the most views - 555000', function () {
    assert.strictEqual(mostViewsThreeSneakers(100, 555000, 2222), 555000);
  });

  it('returns the most views - 3', function () {
    assert.strictEqual(mostViewsThreeSneakers(3, 2, 1), 3);
  });

  it('returns the most views - 222', function () {
    assert.strictEqual(mostViewsThreeSneakers(99, 111, 222), 222);
  });
});

describe('Most Views - Part 2', function () {
  it('returns the most views - 555000', function () {
    assert.strictEqual(mostViews([100, 555000, 2222]), 555000);
  });

  it('returns the most views - 1000', function () {
    assert.strictEqual(mostViews([1000, 800, 600, 400, 200]), 1000);
  });

  it('returns the most views - 999', function () {
    assert.strictEqual(mostViews([999]), 999);
  });
});

describe('Validate Email - Part 1', function () {
  it('recognizes valid email', function () {
    assert.strictEqual(validateEmail('name@gmail.com').toLowerCase(), 'valid email');
  });

  it('recognizes valid email', function () {
    assert.strictEqual(
      validateEmail('firstname.lastname@oldschool.edu').toLowerCase(),
      'valid email'
    );
  });

  it('recognizes an invalid email for a wrong extension', function () {
    assert.strictEqual(validateEmail('nike@shoes.store').toLowerCase(), 'invalid email');
  });

  it('recognizes an invalid email for a missing recipient before the @', function () {
    assert.strictEqual(validateEmail('@helloworld.org').toLowerCase(), 'invalid email');
  });

  it('recognizes an invalid email for a missing @', function () {
    assert.strictEqual(validateEmail('theorgsemailgmail.com').toLowerCase(), 'invalid email');
  });
});

//STUB
describe('Validate Email - Part 2', function () {
  it('recognizes a valid email', function () {
    assert.strictEqual(
      validateEmailWithError('derekjeter@nyyankees.com').toLowerCase(),
      'valid email'
    );
  });

  it('returns the correct error message for a missing @', function () {
    assert.strictEqual(
      validateEmailWithError('sports.local.team.edu').toLowerCase(),
      'invalid email: missing @ symbol'
    );
  });

  it('returns the correct error message for the wrong extension type', function () {
    assert.strictEqual(
      validateEmailWithError('hockey@ice.rink').toLowerCase(),
      'invalid email: email address should end with .com, .edu, .net, or .org'
    );
  });

  it('returns the correct error message for a missing recipient', function () {
    assert.strictEqual(
      validateEmailWithError('@gmail.com').toLowerCase(),
      'invalid email: missing recipient name'
    );
  });
});

describe("Display an Athlete's Initials - Part 1", function () {
  it('returns the correct initials: Cristiano Ronaldo', function () {
    assert.strictEqual(getInitials('Cristiano Ronaldo'), 'CR');
  });

  it('returns the correct initials: Serena Williams', function () {
    assert.strictEqual(getInitials('Serena Williams'), 'SW');
  });

  it('returns the correct initials: Tiger Woods', function () {
    assert.strictEqual(getInitials('Tiger Woods'), 'TW');
  });
});

describe("Display an Athlete's Initials - Part 2 (One Name)", function () {
  it('returns the correct initials: ARod', function () {
    assert.strictEqual(getInitials('ARod'), 'AR');
  });

  it('returns the correct initials: Shaq', function () {
    assert.strictEqual(getInitials('Shaq'), 'SH');
  });
});

describe("Display an Athlete's Initials - Part 3 (Long Name)", function () {
  it('returns the correct initials: Apolo Anton Ohno', function () {
    assert.strictEqual(getInitials('Apolo Anton Ohno'), 'AAO');
  });

  it('returns the correct initials: Billie Jean King', function () {
    assert.strictEqual(getInitials('Billie Jean King'), 'BJK');
  });
});

describe("You're Really Repeating Yourself... Part 1", function () {
  it('returns the correct number of occurrences in the text for: "champions"', function () {
    const text = `we are the champions, my friends
    and we'll keep on fighting till the end
    we are the champions
    we are the champions
    no time for losers
    cause we are the champions of the world
    `;
    assert.strictEqual(howRepetitiveAreYou(text, 'champions'), 4);
  });

  it('returns the correct number of occurrences in the text for: "we"', function () {
    const text = `we are the champions, my friends
    and we'll keep on fighting till the end
    we are the champions
    we are the champions
    no time for losers
    cause we are the champions of the world
    `;
    assert.strictEqual(howRepetitiveAreYou(text, 'we'), 4);
  });

  it('returns the correct number of occurrences in the text for: "the"', function () {
    const text = `we are the champions, my friends
    and we'll keep on fighting till the end
    we are the champions
    we are the champions
    no time for losers
    cause we are the champions of the world
    `;
    assert.strictEqual(howRepetitiveAreYou(text, 'the'), 6);
  });
});

describe("You're Really Repeating Yourself...Part 2 (Case Sensitive)", function () {
  it('returns the correct number of occurrences in the text for: "we"', function () {
    const text = `We are the champions, my friends
    And we'll keep on fighting till the end
    We are the champions
    We are the champions
    No time for losers
    Cause we are the champions of the world
    `;
    assert.strictEqual(howRepetitiveAreYou(text, 'we'), 1);
  });
});

describe('Translate This!', function () {
  it('translates what ARod is saying', function () {
    const spanishText = ['un dia', 'soltera', 'vete', 'la canción'];
    const englishText = ['one day', 'single', 'go away', 'the song'];

    assert.deepStrictEqual(spanishToEnglish(spanishText), englishText);
  });
});

describe('The Code is Totally Buggin - Part 1 (Names)', function () {
  it('returns a string of comma-separated shoes that are white from the shoe list', function () {
    assert.strictEqual(getNames(), 'Air Jordan 1, Air Max 1, Air Jordan 1, Nike Air Max 90');
  });
});

describe('The Code is Totally Buggin - Part 2 (Unique Shoe Names)', function () {
  it('returns a list of unique shoe names from the shoe list', function () {
    assert.deepStrictEqual(getUniqueSneakers(), ['Air Jordan 1', 'Air Max 1', 'Nike Air Max 90']);
  });
});

describe('The Code is Totally Buggin - Part 3 (Most Viewed Sneaker)', function () {
  it('returns the most viewed shoe from the shoe list', function () {
    const expectation = {
      name: 'Air Max 1',
      color: 'Black',
      numberOfViews: 1000,
    };
    const result = getMostViewedSneakers();

    assert.strictEqual(expectation.name, result.name);
    assert.strictEqual(expectation.color, result.color);
    assert.strictEqual(expectation.numberOfViews, result.numberOfViews);
    assert.strictEqual(result.numberOfViews, 1000);
  });
});
