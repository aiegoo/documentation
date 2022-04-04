#include "burgermenu.h"
#include <QStackWidget>
#include <QVboxLayout>
#include <QHboxLayout>
#include <QPushButton>
#include <QAction>
#include <QString>
#include <QStyleOption>
#include <QPainter>
#include <QPropertyAnimation>
#include <QLabel>


static const QString BurgerButtonObjectName("BurgerButton");
static const QString BurgerMenuName("BurgerMenu");
static const QString MainBurgerButtonOjectname("MainBurgerButton");

class BurgerButton : public QPushButton
{
     public:
     BurgerButton(QAction+ Action, QWidget+ parent)
     : QPushButton(parent)
     : mIconSize(QSize(64,64))
     :mAction(action)
}