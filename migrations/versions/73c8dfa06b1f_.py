"""empty message

Revision ID: 73c8dfa06b1f
Revises: 90394489ac49
Create Date: 2022-06-23 10:41:55.857447

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '73c8dfa06b1f'
down_revision = '90394489ac49'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('task')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('task',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('text', sa.VARCHAR(length=250), autoincrement=False, nullable=True),
    sa.Column('done', sa.BOOLEAN(), autoincrement=False, nullable=False),
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], name='task_user_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='task_pkey')
    )
    # ### end Alembic commands ###