'use client'
import { Fragment, useState } from 'react'
import classes from './page.module.scss'
import Image from 'next/image'

import { faqData } from '@/data/faqData'

export default function Home() {
	const [activeId, setActiveId] = useState<string | null>(null)

	const toggleAccordion = (id: string) => {
		setActiveId(activeId === id ? null : id)
	}

	const isAccordionOpen = (id: string) => {
		return activeId === id
	}

	return (
		<Fragment>
			<main>
				<section className={classes['faq-section']}>
					<div className={classes['faq-container']}>
						<div className={classes['faq-header']}>
							<Image
								className={classes['faq-header__img']}
								src={'images/icon-star.svg'}
								alt='Star image'
								width={24}
								height={24}></Image>
							<h1 className={classes['faq-header__title']}>FAQs</h1>
						</div>

						<div className={classes['faq-content']}>
							{faqData.map(faq => (
								<Fragment key={faq.id}>
									<div className={classes['faq-content__item']}>
										<button className={classes['faq-content__question']} onClick={() => toggleAccordion(faq.id)}>
											<p className={classes['faq-content__question-title']}>{faq.question}</p>
											<Image
												className={classes['faq-content__question-icon']}
												src={isAccordionOpen(faq.id) ? '/images/icon-minus.svg' : '/images/icon-plus.svg'}
												alt='Toggle Icon'
												width={30}
												height={30}
											/>
										</button>
										<div
											className={`${classes['faq-content__answer']} ${
												isAccordionOpen(faq.id)
													? classes['faq-content__answer-open']
													: classes['faq-content__answer-close']
											}`}>
											<p className={classes['faq-content__answer-text']}>{faq.answer}</p>
										</div>
									</div>
									<hr />
								</Fragment>
							))}
						</div>
					</div>
				</section>
			</main>
			<footer>
				<div className={classes.footer}>
					Challenge by{' '}
					<a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
						{' '}
						<span>➜</span>
						Frontend Mentor
					</a>
					. Coded by{' '}
					<a href='https://github.com/BartqD' target='_blank'>
						<span>➜</span>Bartosz
					</a>
					.
				</div>
			</footer>
		</Fragment>
	)
}
