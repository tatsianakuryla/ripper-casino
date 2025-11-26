import type { JSX } from 'react';

import { DescriptionBlock } from '@/components/ui/DescriptionBlock';
import { SubsectionHeading } from '@/components/ui/SubsectionHeading';

export const CowboysCasinoGamesDescription = (): JSX.Element => {
  return (
    <div className="flex gap-[64px]">
      <div className="flex flex-col gap-[56px]">
        <DescriptionBlock className="gap-[24px]">
          <SubsectionHeading>Slots</SubsectionHeading>
          <p>
            At Cowboys Casino Calgary, the slots area is a major attraction,
            featuring an array of machines that include traditional three-reel
            classics, contemporary five-reel video slots, and progressive
            jackpot slots that offer life-changing payouts. The selection is
            frequently updated with new and exciting games to maintain interest
            and provide fresh challenges for regular patrons.
          </p>
        </DescriptionBlock>
        <DescriptionBlock className="gap-[24px]">
          <SubsectionHeading>Poker Room</SubsectionHeading>
          <p>
            Cowboys Casino poker room is a hub of strategic gaming activity,
            offering a range of poker styles and tournament formats. The
            environment is professional yet inviting, with highly skilled
            dealers who ensure the integrity and smooth flow of games. The
            Cowboys Casino poker room also promotes a sense of camaraderie among
            players through regular Cowboys Casino poker tournaments and cash
            games, which foster competitive yet friendly play. This section of
            the casino is particularly popular among players who appreciate
            poker’s balance of luck and skill.
          </p>
        </DescriptionBlock>
      </div>
      <div className="flex flex-col gap-[56px]">
        <DescriptionBlock className="gap-[24px]">
          <SubsectionHeading>Table Games</SubsectionHeading>
          <p>
            The table games at Cowboys Casino are designed to cater to both
            beginners and seasoned gamblers. Popular games like Blackjack come
            with variations that introduce new rules and betting options, adding
            depth to the traditional gameplay. Roulette enthusiasts can choose
            between American and European roulette tables, each offering
            different odds and betting strategies. For those interested in
            Asian-inspired gaming, Baccarat provides a simple yet intriguing
            game of chance, while Craps offers a dynamic community gaming
            experience with its complex bets and fast-paced action.
          </p>
        </DescriptionBlock>
        <DescriptionBlock className="gap-[24px]">
          <SubsectionHeading>Electronic Table Games</SubsectionHeading>
          <p>
            The electronic table games at Cowboys Casino hotel provide a modern
            twist on classic casino fare. These games utilize advanced
            technology to simulate live table games with virtual dealers and
            electronic betting. Players can enjoy a faster-paced gaming
            experience with features like rapid roulette, which accelerates the
            traditional game for quick play. Electronic Blackjack and Baccarat
            games are also available, offering a perfect platform for beginners
            to learn the rules without the pressure of a crowded table.
          </p>
        </DescriptionBlock>
      </div>
    </div>
  );
};
