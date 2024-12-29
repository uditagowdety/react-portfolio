import React from 'react'

const Design = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">UI/UX Designer</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skill__name">UX Design</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skill__name">UX Research</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skill__name">Interface Design</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                {/* <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skill__name">Human-Computer Interaction</h3>
                        <span className="skills__level">Beginner</span>
                    </div>
                </div> */}

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skill__name">Product Design</h3>
                        <span className="skills__level">Beginner</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skill__name">Design Thinking</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Design