import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'

// Material UI components
import { 
    Box,
    Container
} from '@material-ui/core'

// Own components
import GridPanel from '../GridPanel'
import ObjectiveCard from '../ObjectiveCard'

import { dailyBosses, dailyQuests } from '../../data/objectives'
import { dailyReset } from '../../data/resetTypes'

const styles = {
    background: {
        backgroundColor: 'rgb(245,245,245)',
        borderRadius: '10px'
    }
}

class Dailies extends React.Component {
    constructor(props) {
        super(props)

        this.renderObjectives = this.renderObjectives.bind(this)
    }

    render() {
        const { classes } = this.props
        return (   
            <Container 
            maxWidth="lg">
                <Box 
                py={[1, 2, 3, 4, 5]}>
                    <Box
                    className={classes.background}  
                    p={[1, 2, 3, 4, 5]}>
                        <Box
                        mb={[1, 2, 3, 4, 5]}>
                            <GridPanel 
                            title="DAILY BOSSES"
                            resetType={dailyReset}>
                                { this.renderObjectives(dailyBosses) }
                            </GridPanel>
                        </Box>


                        <GridPanel 
                        title="DAILY QUESTS"
                        resetType={dailyReset}>
                            { this.renderObjectives(dailyQuests) }
                        </GridPanel>
                    </Box>
                </Box>
            </Container>
        )
    }

    renderObjectives(objectives) {
        var objectivesToRender = objectives.filter((objective) => {
            if(!this.props.disabledObjectives.includes(objective.name)) {
                return objective
            }
        })

        return objectivesToRender.map((objective, index) =>
            <ObjectiveCard objective={objective} key={index}/>
        )
    }
}

const mapStateToProps = (state) => {
    return state.objectives["Daily Reset"]
}

export default withStyles(styles)(connect(mapStateToProps)(Dailies))